const express = require('express');
const kafkaMonitoringController = require('../controllers/kafkaMonitoringController');
const router = express.Router();

router.post(
  '/',
  kafkaMonitoringController.pullDockerImages,
  kafkaMonitoringController.createNetwork,
  kafkaMonitoringController.generatePrometheusConfig,
  (req, res, next) =>
    kafkaMonitoringController.stopAndRemoveContainer(
      'prometheus',
      req,
      res,
      next,
    ),
  (req, res, next) =>
    kafkaMonitoringController.stopAndRemoveContainer('grafana', req, res, next),
  kafkaMonitoringController.createPrometheusContainer,
  kafkaMonitoringController.createGrafanaContainer,
  (req, res) => {
    res
      .status(200)
      .json({ message: 'Monitoring setup initiated successfully.' });
  },
);

module.exports = router;
