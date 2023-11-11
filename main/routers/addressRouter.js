// get express and Router

const express = require('express');
const addressController = require('../controllers/addressController');

const router = express.Router();

router.post('/',
  addressController.checkForDocker,
  addressController.bootUpDocker,
  // addressController.writeJmxConfig,
  // addressController.connectToKafka,
  // addressController.startPrometheus,
  (req, res) => {
    res.status(200).json({message: 'made it back'});
  }
);

module.exports = router;