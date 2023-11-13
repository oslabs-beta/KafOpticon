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
  grafanaController.getDashboard,
  (req, res) => {
    res.status(200).json(res.locals.dashboard);
  }
);

module.exports = router;