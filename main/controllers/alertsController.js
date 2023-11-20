const path = require('path');
const fs = require('fs')

const alertsController = {}

alertsController.writeAlertsInfo = () => {
    // fs.writeFileSync()
    // console.log('reqbody', req.body)
    // const destination = path.join(__dirname, '../../docker-test/.env')
    // const { emailAddress, appPassword } = req.body
    console.log('alerts controller emailAddress, appPassword accepted!')
}


module.exports = alertsController