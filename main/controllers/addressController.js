// this is where the controller middleware for the address route/endpoint lives

const fsp = require('fs').promises;
const path = require('path');
const { spawn } = require('child_process');

const addressController = {};

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
  const { address } = req.body;

  res.locals.jmxConfig = `hostPort: ${address}\n`;

  return next();
};

addressController.writeJmxConfig2 = async (req, res, next) => {
  // write the jmx config file using the user inputted kafka address
  // console.log('entered writeJmxConfig2');

  // return res.send(path.join(process.resourcesPath, 'templates', 'jmxconfig.yml'));

  // correct paths for npm start (in development)
  // const templateFileAddress = path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxConfigTemplate.yml');
  // const destination = path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxconfig.yml'); 

  // const templateFileAddress = path.join(process.resourcesPath, '..', 'templates', 'host-route', 'jmxConfigTemplate.yml');
  // const destination = path.join(process.resourcesPath, '..', 'templates', 'host-route', 'jmxconfig.yml');

  // make file paths conditional on node environment
  const templateFileAddress = (process.env.NODE_ENV === 'development') ? path.join(__dirname, '..', '..', 'templates', 'host-route', 'jmxConfigTemplate.yml') : path.join(process.resourcesPath, '..', 'templates', 'host-route', 'jmxConfigTemplate.yml');
  const destination = (process.env.NODE_ENV === 'development') ? path.join(__dirname, '..', '..', 'templates', 'host-route', 'jmxconfig.yml') : path.join(process.resourcesPath, '..', 'templates', 'host-route', 'jmxconfig.yml');
  // let newFileString = res.locals.jmxConfig;
  
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
  // console.log('entered conntectToKafka');

  // dev path
  // const workDir = path.join(__dirname, '..', '..');

  // production path
  // const workDir = path.join(process.resourcesPath, )

  try {
    const child = spawn('npm run exportJmx', {
      shell: true,
      stdio: 'inherit',
      // cwd: path.join(__dirname, '..', '..')
    });
  } catch (err) {
    return next(new ACError('connectToKafka', 500, err));
  }

  // for visibility in production
  // res.locals.children = [];
  // res.locals.children.push(child);

  return next();
};

addressController.startPrometheus = (req, res, next) => {
  // create child process that runs prometheus and connect it to jmx exporter
  // console.log('entered startPrometheus');
  try {
    const child = spawn('npm run prometheus', {
      shell: true,
      stdio: 'inherit',
      // cwd: path.join(__dirname, '..', '..')
    });
  } catch (err) {
    return next(new ACError('startPrometheus', 500, err));
  }

  // for visibility in production
  // res.locals.children.push(child);

  return next();
};


module.exports = addressController;