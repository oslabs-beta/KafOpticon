// this is where the controller middleware for the address route/endpoint lives

const fs = require('fs').promises;
const path = require('path');

console.log(path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxconfig.yml'));
console.log(path.join('local-test', 'scraping-config'));

const addressController = {};

addressController.writeJmxConfig = (req, res, next) => {
  // write the jmx config file using the user inputted kafka address
  console.log('entered writeJmxConfig');

  const configFileAddress = path.join(__dirname, '..', '..', 'local-test', 'scraping-config', 'jmxconfig.yml');
  const { address } = req.body;
  // PROBABLY SHOULD SANITIZE HERE

  const lineToAppend = `hostPort: ${address}`;
  console.log('lineToAppend:', lineToAppend);
  
  // write to the file
  fs.open(configFileAddress, 'a')
    .then((fh) => {
      fs.writeFile(fh,'\n' + lineToAppend + '\n', 'utf8')
        .then((data) => {
          console.log('Supposedly appended');
          fh.close();
          next();
        })
        .catch((err) => {
          return next({
          log: 'An error occurred in addressController.writeJmxConfig',
          status: 422,
          message: err 
        })})
    })
    .catch((err) => next ({
      log: 'An error occurred in addressController.writeJmxConfig',
      status: 422,
      message: err
    }))

}

addressController.connectToKafka = (req, res, next) => {
  // create child process that runs jmx exporter and connect it to the kafka cluster
  
  console.log('entered connectToKafka');
  next();
};

module.exports = addressController;