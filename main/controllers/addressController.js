// this is where the controller middleware for the address route/endpoint lives

const fs = require('fs').promises;

const addressController = {};

addressController.writeJmxConfig = (req, res, next) => {
  // write the jmx config file using the user inputted kafka address
  console.log('entered writeJmxConfig');
  console.log('req.body: ', req.body);

  const { address } = req.body;
  // PROBABLY SHOULD SANITIZE HERE
  console.log(address);
  // write to the file
  fs.open('hello.txt', 'r+')
    .then((fh) => {
      fs.writeFile(fh, address, 'utf8')
        .then((data) => {
          console.log('.then ~ data:', data);
          next();
        })
        .catch((err) => next({
          log: 'An error occurred in addressController.writeJmxConfig',
          status: 422,
          message: err 
        }))
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