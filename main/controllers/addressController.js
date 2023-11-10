// this is where the controller middleware for the address route/endpoint lives

const fsp = require('fs').promises;
const path = require('path');
const { spawn } =require('child_process');

console.log(path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxconfig.yml'));
console.log(path.join('local-test', 'scraping-config'));

const addressController = {};



addressController.writeJmxConfig = async (req, res, next) => {
  // write the jmx config file using the user inputted kafka address
  console.log('entered writeJmxConfig');

  const templateFileAddress = path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxConfigTemplate.yml');
  const destination = path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxconfig.yml'); 
  const { address } = req.body;
  // PROBABLY SHOULD SANITIZE HERE

  const lineToAppend = `hostPort: ${address}`;

  // a variable to store what is in the template config file
  let newFileString = lineToAppend + '\n';
  
  // read the information from the template file and append it to newFileString
  try {
    const contents = await fsp.readFile(templateFileAddress, 'utf8');
    newFileString += contents;
  } catch (err) {
    return next({chess: 'a good game'});
  }

  // write the newFileString to the destination file
  try {
    await fsp.writeFile(destination, newFileString, 'utf8');
  } catch (err) {
    return next({chess: 'a tough game'});
  }

  return next();

}

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

  next();
}

module.exports = addressController;