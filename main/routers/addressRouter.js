// get express and Router

const express = require('express');
const addressController = require('../controllers/addressController');
const grafanaController = require('../controllers/grafanaController');

const router = express.Router();

router.post('/',
  // addressController.checkForDocker,
  // addressController.bootUpDocker,
  // grafanaController.startGrafana,
  addressController.writeJmxConfig1,
  addressController.writeJmxConfig2,
  addressController.connectToKafka,
  addressController.startPrometheus,
  grafanaController.getPrometheus,
  grafanaController.createPromSource,
  grafanaController.getPrometheus,
  grafanaController.generateDashJson,
  grafanaController.createDashboard,
  (req, res) => {
    res.redirect('back');
  }
);

module.exports = router;