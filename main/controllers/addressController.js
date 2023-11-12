// this is where the controller middleware for the address route/endpoint lives

const fsp = require('fs').promises;
const path = require('path');
const { spawn } = require('child_process');

const addressController = {};

class ACError {
  constructor (location, status, message) {
    this.log = 'An error occurred in addressController.' + location;
    this.status = status;
    this.message = {err: message}
  }
}


addressController.writeJmxConfig = async (req, res, next) => {
  // write the jmx config file using the user inputted kafka address


  const templateFileAddress = path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxConfigTemplate.yml');
  const destination = path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxconfig.yml'); 
  const { address } = req.body;
  // console.log(address);
  // PROBABLY SHOULD SANITIZE HERE

  const lineToAppend = `hostPort: ${address}`;

  // a variable to store what is in the template config file
  let newFileString = lineToAppend + '\n';
  
  // read the information from the template file and append it to newFileString
  try {
    const contents = await fsp.readFile(templateFileAddress, 'utf8');
    newFileString += contents;
  } catch (err) {
    return next(new ACError('writeJmxConfig', 422, err));
  }

  // write the newFileString to the destination file
  try {
    await fsp.writeFile(destination, newFileString, 'utf8');
  } catch (err) {
    return next(new ACError('writeJmxConfig', 422, err));
  }

  return next();
}

addressController.checkForDocker = async (req, res, next) => {
  // this middleware checks for docker

  // first check whether docker is running
  // do this by running docker ps and watching the output
  const child = spawn('docker ps', {
    shell: true
  });

  let answer = '';

  child.stdout.on('data', (data) => {
    answer += data;
  });

  // assign the appropriate boolean to res.locals.docker
  // and call the next middleware
  child.on('close', () => {
    if (answer.includes('CONTAINER ID')){
      res.locals.docker = true;
    } else res.locals.docker = false;
    next();
  });

  // write something that will call next() even if child process doesn't close
  // properly/in a timely manner
};


addressController.bootUpDocker = (req, res, next) => {
  // if the docker daemon is running, this middleware will boot up
  // our stuff in docker by running docker compose up -d in the docker-test directory

  if (res.locals.docker) {
    const child = spawn('docker-compose up -d', {
      shell: true,
      stdio: 'inherit',
      cwd: path.join(__dirname, '..', '..', 'docker-test')
    });
  }
  next();
};

addressController.connectToKafka = (req, res, next) => {
  // create child process that runs jmx exporter and connect it to the kafka cluster

  const child = spawn('npm run exportJmx', {
    shell: true,
    stdio: 'inherit',
    cwd: path.join(__dirname, '..', '..', 'local-test')
  });

  next();
};

addressController.startPrometheus = (req, res, next) => {
  // create child process that runs prometheus and connect it to jmx exporter

  const child = spawn('npm run prometheus', {
    shell: true,
    stdio: 'inherit',
    cwd: path.join(__dirname, '..', '..', 'local-test')
  });

  setTimeout(() => {next();}, 5000);
};


module.exports = addressController;