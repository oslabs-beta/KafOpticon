const Docker = require('dockerode');
const fs = require('fs');
const path = require('path');
const docker = new Docker();

const kafkaMonitoringController = {};

async function createNetwork() {
  try {
    const networkName = 'monitoring_network_test';
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

async function generatePrometheusConfig(kafkaJmxEndpoints) {
  const prometheusConfigTemplate = `
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'kafka'
    static_configs:
     - targets: ['${kafkaJmxEndpoints}']
`;

  // Write the configuration to a file
  fs.writeFileSync(
    path.join(__dirname, 'prometheus.yml'),
    prometheusConfigTemplate.trim(),
  );
}

async function createPrometheusContainer(networkName) {
  try {
    const promConfigPath = path.join(__dirname, 'prometheus.yml');
    const container = await docker.createContainer({
      Image: 'prom/prometheus:latest',
      Volumes: {
        '/etc/prometheus/prometheus.yml': {},
      },
      HostConfig: {
        Binds: [`${promConfigPath}:/etc/prometheus/prometheus.yml`],
      },
      ExposedPorts: {
        '9090/tcp': {},
      },
      PortBindings: {
        '9090/tcp': [{ HostPort: '9090' }],
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
    const container = await docker.createContainer({
      Image: 'grafana/grafana:latest',
      ExposedPorts: {
        '3000/tcp': {},
      },
      PortBindings: {
        '3000/tcp': [
          {
            HostPort: '3000',
          },
        ],
      },
      Env: [
        'GF_SECURITY_ADMIN_USER=admin',
        'GF_SECURITY_ADMIN_PASSWORD=admin',
        'GF_USERS_ALLOW_SIGN_UP=false',
        'GF_SECURITY_ALLOW_EMBEDDING=true',
        'GF_AUTH_ANONYMOUS_ENABLED=true',
      ],
      NetworkingConfig: {
        EndpointsConfig: {
          [networkName]: {},
        },
      },
    });
    await container.start();
  } catch (err) {
    console.log('Error in creating Grafana container:', err);
  }
}

kafkaMonitoringController.setUpDocker = async (req, res, next) => {
  try {
    const { kafkaJmxEndpoints } = req.body;
    const networkName = await createNetwork();
    await generatePrometheusConfig(kafkaJmxEndpoints);
    await createPrometheusContainer(networkName);
    await createGrafanaContainer(networkName);

    res.send('Monitoring setup initiated successfully.');
  } catch (err) {
    console.log('Setup failed:', err);
    res.status(500).send('Failed to setup monitoring.');
  }
};

module.exports = kafkaMonitoringController;
