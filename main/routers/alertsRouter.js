const express = require('express');
const alertsController = require('../controllers/alertsController');

const router = express.Router();

router.post('/', alertsController.writeAlertsInfo, (req, res) => {
    res.status(200);
})



module.exports = router;