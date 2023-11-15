// get express and Router

const express = require('express');
const addressController = require('../controllers/addressController');
const grafanaController = require('../controllers/grafanaController');

const router = express.Router();

router.post('/',
  // addressController.checkForDocker,
  // addressController.bootUpDocker,
  grafanaController.startGrafana,
  addressController.writeJmxConfig,
  addressController.connectToKafka,
  addressController.startPrometheus,
  grafanaController.createDashboard,
  (req, res) => {
    res.status(200).send();
  }
);

module.exports = router;