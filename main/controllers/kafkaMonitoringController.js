const Docker = require('dockerode');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const docker = new Docker();
const pullImage = promisify(docker.pull.bind(docker));


const kafkaMonitoringController = {};

class KMError {
  constructor(location, status, message) {
    this.log = 'An error occurred in kafkaMonitoringController.' + location;
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

    // production path
    const prometheusConfigPath = path.join(process.resourcesPath, '..', 'templates', 'docker-route', 'prometheus.yml');

    fs.writeFileSync(
      prometheusConfigPath,
      prometheusConfigTemplate.trim(),
    );
    next();
  } catch (err) {
    next(new KMError('generatePrometheusConfig', 424, err));
  }
};

kafkaMonitoringController.stopAndRemoveContainer = async (
  containerName,
  req,
  res,
  next,
) => {
  try {
    const container = docker.getContainer(containerName);
    const data = await container.inspect();
    if (data.State.Running) {
      await container.stop();
    }
    await container.remove();
    next();
  } catch (err) {
    if (err.statusCode !== 404) {
      next(new KMError('getContainer', 424, err));
    } else {
      next();
    }
  }
};

kafkaMonitoringController.createPrometheusContainer = async (
  req,
  res,
  next,
) => {
  try {
    // if in development
    // const promConfigPath = path.join(__dirname, 'prometheus.yml');

    // if in production
    const promConfigPath = path.join(process.resourcesPath, '..', 'templates', 'docker-route', 'prometheus.yml');

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

    // for production
    const iniPath = path.join(process.resourcesPath, '..', 'templates', 'grafana', 'grafana.ini');
    const dashboardsPath = path.join(process.resourcesPath, '..', 'templates', 'grafana', 'Dockerfile', 'provisioning', 'dashboards');
    const datasourcePath = path.join(process.resourcesPath, '..', 'templates', 'grafana', 'Dockerfile', 'provisioning', 'datasources', 'datasource.yml');

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
    next(new KMError('createGrafanaError', 424, err));
  }
};

module.exports = kafkaMonitoringController;
