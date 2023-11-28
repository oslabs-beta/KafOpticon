const Docker = require('dockerode');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const log = require('electron-log/main');

const docker = new Docker();
const pullImage = promisify(docker.pull.bind(docker));


const kafkaMonitoringController = {};

function followPullProgress(stream) {
  return new Promise((resolve, reject) => {
    docker.modem.followProgress(stream, (err, res) =>
      err ? reject(err) : resolve(res),
    );
  });
}
async function stopAndRemoveContainer(containerName) {
  try {
    const container = docker.getContainer(containerName);
    await container.stop();
    await container.remove();
  } catch (err) {
    // Handle errors (e.g., container not found)
    console.log(
      `Error stopping/removing container ${containerName}:`,
      err.message,
    );
  }
}
async function pullDockerImages() {
  try {
    const prometheusStream = await pullImage('prom/prometheus:latest');
    await followPullProgress(prometheusStream);

    const grafanaStream = await pullImage('grafana/grafana:latest');
    await followPullProgress(grafanaStream);

    console.log('Images pulled successfully');
  } catch (err) {
    console.error('Error pulling images:', err);
  }
}

function generateUniqueNetworkName(baseName) {
  const timestamp = Date.now();
  return `${baseName}-${timestamp}`;
}

async function createNetwork() {
  try {
    const networkName = generateUniqueNetworkName('testing-network');
    const network = await docker.createNetwork({
      Name: networkName,
      Driver: 'bridge',
    });
    return networkName;
  } catch (err) {
    console.error('Error in creating network:', err);
    throw err;
  }
}

async function generatePrometheusConfig(jmxPorts) {
  // const jmxTargets = [];
  // if (jmxPorts.every(port => port.includes(':'))) {
  //   jmxTargets = jmxPorts;
  // } else {

  // return res.send('entered generatePrometheusConfig');
   
  // if in production
  const fileLocation = path.join(process.resourcesPath, '..', 'templates', 'docker-route', 'prometheus.yml');

  // if in development
  // const fileLocation = path.join(__dirname, 'prometheus.yml');

  console.log(jmxPorts);
  jmxTargets = jmxPorts.map(port => `host.docker.internal:${port}`);
  // }
  const prometheusConfigTemplate = `
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'kafka'
    static_configs:
     - targets: ${JSON.stringify(jmxTargets)}
`;

  fs.writeFileSync(
    fileLocation,
    prometheusConfigTemplate.trim(),
  );
}

async function createPrometheusContainer(networkName) {
  try {
    // if in development
    // const promConfigPath = path.join(__dirname, 'prometheus.yml');

    // if in production
    const promConfigPath = path.join(process.resourcesPath, '..', 'templates', 'docker-route', 'prometheus.yml');
    const container = await docker.createContainer({
      name: 'prometheus',
      Image: 'prom/prometheus:latest',
      Volumes: {
        '/etc/prometheus/prometheus.yml': {},
      },
      HostConfig: {
        Binds: [`${promConfigPath}:/etc/prometheus/prometheus.yml`],
        PortBindings: {
          '9090/tcp': [{ HostPort: '9090' }],
        },
      },
      ExposedPorts: {
        '9090/tcp': {},
      },

      NetworkingConfig: {
        EndpointsConfig: {
          [networkName]: {},
        },
      },
    });
    await container.start();
  } catch (err) {
    console.error('Error in creating Prometheus container:', err);
    throw err;
  }
}

async function createGrafanaContainer(networkName) {
  try {

    // return res.send('entered createGrafanaContainer');

    const storageVolume = await docker.createVolume({
      Name: 'grafana-storage',
    });
    const grafanaEnv = [
      'GF_SECURITY_ADMIN_USER=admin',
      'GF_SECURITY_ADMIN_PASSWORD=admin',
      'GF_USERS_ALLOW_SIGN_UP=false',
      'GF_SECURITY_ALLOW_EMBEDDING=true',
      'GF_AUTH_ANONYMOUS_ENABLED=true',
      'GF_INSTALL_PLUGINS=grafana-clock-panel',
    ];

    // Volume Bindings
    const grafanaBinds = [
      `${path.join(
        __dirname,
        '../../grafana/Dockerfile/provisioning/dashboards',
      )}:/etc/grafana/provisioning/dashboards`,
      `${path.join(
        __dirname,
        '../../grafana/Dockerfile/provisioning/datasources/datasource.yml',
      )}:/etc/grafana/provisioning/datasources/datasource.yml`,
      `${path.join(
        __dirname,
        '../../grafana/grafana.ini',
      )}:/etc/grafana/grafana.ini`,
      'grafana-storage:/var/lib/grafana',
    ];

    // Create Container
    const container = await docker.createContainer({
      name: 'grafana',
      Image: 'grafana/grafana:latest',
      Volumes: {
        '/var/lib/grafana': {},
      },
      ExposedPorts: {
        '3000/tcp': {},
      },
      HostConfig: {
        Binds: grafanaBinds,
        PortBindings: {
          '3000/tcp': [{ HostPort: '3000' }],
        },
      },
      Env: grafanaEnv,
      NetworkingConfig: {
        EndpointsConfig: {
          [networkName]: {},
        },
      },
    });

    // Start Container
    await container.start();
  } catch (err) {
    console.error('Error in creating Grafana container:', err);
    throw err;
  }
}

kafkaMonitoringController.setUpDocker = async (req, res, next) => {
  try {
    const { address } = req.body;
    const networkName = await createNetwork();
    await pullDockerImages();
    await generatePrometheusConfig(address);
    await stopAndRemoveContainer('prometheus');
    await stopAndRemoveContainer('grafana');
    await createPrometheusContainer(networkName);
    await createGrafanaContainer(networkName);

    res.send('Monitoring setup initiated successfully.');
  } catch (err) {
    console.log('Setup failed:', err);
    log.info(err);
    res.status(500).send('Failed to setup monitoring.');
  }
};

module.exports = kafkaMonitoringController;
