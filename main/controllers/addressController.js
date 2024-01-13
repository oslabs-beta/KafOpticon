// this is where the controller middleware for the address route/endpoint lives

const fsp = require('fs').promises;
const path = require('path');
const { spawn } = require('child_process');

const addressController = {};
addressController.jmxExporterChild = null;
addressController.prometheusChild = null;

// error constructor for this controller
class ACError {
  constructor (location, status, message) {
    this.log = 'An error occurred in addressController.' + location;
    this.status = status;
    this.message = {err: message}
  }
}


addressController.writeJmxConfig1 = (req, res, next) => {
  // gets information off the request body and puts a transformation of it onto res.locals
  if (process.env.NODE_ENV !== 'test') console.log('entered writeJmxConfig1')

  const { address } = req.body;
  const fullAddress = 'localhost:' + address;  

  res.locals.jmxConfig = `hostPort: ${fullAddress}\n`;

  return next();
};

addressController.writeJmxConfig2 = async (req, res, next) => {
  // write the jmx config file using the user inputted kafka address
  if (process.env.NODE_ENV !== 'test') console.log('entered writeJmxConfig2');

  // get paths to configuration files
  const templateFileAddress = path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxConfigTemplate.yml');
  const destination = path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxconfig.yml'); 
  
  // read the information from the template file and append it to newFileString
  try {
    const contents = await fsp.readFile(templateFileAddress, 'utf8');
    res.locals.jmxConfig += contents;
  } catch (err) {
    return next(new ACError('writeJmxConfig2', 422, err));
  }

  // write the newFileString to the destination file
  try {
    await fsp.writeFile(destination, res.locals.jmxConfig, 'utf8');
  } catch (err) {
    return next(new ACError('writeJmxConfig2', 422, err));
  }

  return next();
}

addressController.connectToKafka = (req, res, next) => {
  // create child process that runs jmx exporter and connect it to the kafka cluster
  if (process.env.NODE_ENV !== 'test') console.log('entered connectToKafka');

  const child = spawn('java',  ['-jar', 'jmx_prometheus_httpserver-0.19.0.jar', '3030', 'scraping-config/jmxconfig.yml'], {
  // const child = spawn('npm', ['run', 'exportJmx'], {
    shell: true,
    // detached: true,
    stdio: 'inherit',
    cwd: path.join(__dirname, '..', '..', 'local-test')
  });

  addressController.jmxExporterChild = child;
  // addressController.jmxExporterChild.kill();

  return next();
};

addressController.startPrometheus = (req, res, next) => {
  // create child process that runs prometheus and connect it to jmx exporter
  if (process.env.NODE_ENV !== 'test') console.log('entered startPrometheus');

  const child = spawn('prometheus --config.file=scraping-config/prometheus.yml', {
    shell: true,
    // stdio: 'inherit',
    cwd: path.join(__dirname, '..', '..', 'local-test')
  });

  addressController.prometheusChild = child;

  return next();
};


module.exports = addressController;