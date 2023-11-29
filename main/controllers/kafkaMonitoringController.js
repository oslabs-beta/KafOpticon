const Docker = require('dockerode');
const { app } = require('electron');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const docker = new Docker();
const pullImage = promisify(docker.pull.bind(docker));

const kafkaMonitoringController = {};

class KMError {
  constructor(location, status, message) {
    this.log = `An error occurred in kafkaMonitoringController.${location}`;
    this.status = status;
    this.message = { err: message };
  }
}

function followPullProgress(stream) {
  return new Promise((resolve, reject) => {
    docker.modem.followProgress(stream, (err, res) =>
      err ? reject(err) : resolve(res),
    );
  });
}

// Helper function to resolve paths both in development and production
function getPathForFileInTemplates(relativePath) {
  if (app.isPackaged) {
    return path.join(process.resourcesPath, 'templates', relativePath);
  } else {
    // If not packaged, 'templates' directory is assumed to be in the project root
    return path.join(__dirname, '../../templates', relativePath);
  }
}

kafkaMonitoringController.pullDockerImages = async (req, res, next) => {
  try {
    const promStream = await pullImage('prom/prometheus:latest');
    await followPullProgress(promStream);
    const grafanaStream = await pullImage('grafana/grafana:latest');
    await followPullProgress(grafanaStream);
    next();
  } catch (err) {
    next(new KMError('pullDockerImages', 424, err));
  }
};

kafkaMonitoringController.createNetwork = async (req, res, next) => {
  try {
    const networkName = `monitoring_network_${Date.now()}`;
    await docker.createNetwork({ Name: networkName, Driver: 'bridge' });
    req.networkName = networkName;
    next();
  } catch (err) {
    next(new KMError('createNetwork', 424, err));
  }
};

kafkaMonitoringController.generatePrometheusConfig = (req, res, next) => {
  try {
    const jmxTargets = req.body.address.map(
      port => `host.docker.internal:${port}`,
    );
    const prometheusConfigTemplate = `
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'kafka'
    static_configs:
      - targets: ${JSON.stringify(jmxTargets)}
`;

    const prometheusConfigPath = getPathForFileInTemplates(
      'docker-route/prometheus.yml',
    );

    fs.writeFileSync(prometheusConfigPath, prometheusConfigTemplate.trim());
    next();
  } catch (err) {
    next(new KMError('generatePrometheusConfig', 424, err));
  }
};

kafkaMonitoringController.stopAndRemoveContainers = async (req, res, next) => {
  const containerNames = ['prometheus', 'grafana'];
  try {
    for (const containerName of containerNames) {
      const container = docker.getContainer(containerName);
      await container
        .stop()
        .catch(err =>
          console.log(
            `Error stopping container ${containerName}:`,
            err.message,
          ),
        );
      await container
        .remove()
        .catch(err =>
          console.log(
            `Error removing container ${containerName}:`,
            err.message,
          ),
        );
    }
    next();
  } catch (err) {
    next(new KMError('stopAndRemoveContainer', 424, err));
  }
};

kafkaMonitoringController.createPrometheusContainer = async (
  req,
  res,
  next,
) => {
  try {
    const promConfigPath = getPathForFileInTemplates(
      'docker-route/prometheus.yml',
    );
    const container = await docker.createContainer({
      name: 'prometheus',
      Image: 'prom/prometheus:latest',
      Volumes: { '/etc/prometheus/prometheus.yml': {} },
      HostConfig: {
        Binds: [`${promConfigPath}:/etc/prometheus/prometheus.yml`],
        PortBindings: { '9090/tcp': [{ HostPort: '9090' }] },
      },
      ExposedPorts: { '9090/tcp': {} },
      NetworkingConfig: { EndpointsConfig: { [req.networkName]: {} } },
    });
    await container.start();
    next();
  } catch (err) {
    next(new KMError('createPrometheusContainer', 424, err));
  }
};

kafkaMonitoringController.createGrafanaContainer = async (req, res, next) => {
  try {
    const iniPath = getPathForFileInTemplates('grafana/grafana.ini');
    const dashboardsPath = getPathForFileInTemplates(
      'grafana/Dockerfile/provisioning/dashboards',
    );
    const datasourcePath = getPathForFileInTemplates(
      'grafana/Dockerfile/provisioning/datasources/datasource.yml',
    );

    const grafanaEnv = [
      'GF_SECURITY_ADMIN_USER=admin',
      'GF_SECURITY_ADMIN_PASSWORD=admin',
      'GF_USERS_ALLOW_SIGN_UP=false',
      'GF_SECURITY_ALLOW_EMBEDDING=true',
      'GF_AUTH_ANONYMOUS_ENABLED=true',
      'GF_INSTALL_PLUGINS=grafana-clock-panel',
    ];
    const grafanaBinds = [
      `${dashboardsPath}:/etc/grafana/provisioning/dashboards`,
      `${datasourcePath}:/etc/grafana/provisioning/datasources/datasource.yml`,
      `${iniPath}:/etc/grafana/grafana.ini`,
      'grafana-storage:/var/lib/grafana',
    ];
    const container = await docker.createContainer({
      name: 'grafana',
      Image: 'grafana/grafana:latest',
      Volumes: { '/var/lib/grafana': {} },
      ExposedPorts: { '3000/tcp': {} },
      HostConfig: {
        Binds: grafanaBinds,
        PortBindings: { '3000/tcp': [{ HostPort: '3000' }] },
      },
      Env: grafanaEnv,
      NetworkingConfig: { EndpointsConfig: { [req.networkName]: {} } },
    });
    await container.start();
    next();
  } catch (err) {
    next(new KMError('createGrafanaContainer', 424, err));
  }
};

module.exports = kafkaMonitoringController;
