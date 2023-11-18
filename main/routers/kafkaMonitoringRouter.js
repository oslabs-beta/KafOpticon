const express = require('express');
const kafkaMonitoringController = require('../controllers/kafkaMonitoringController');

const router = express.Router();

router.post('/', kafkaMonitoringController.setUpDocker, (req, res) => {
  res.status(200).json({ message: 'made it back' });
});

module.exports = router;
