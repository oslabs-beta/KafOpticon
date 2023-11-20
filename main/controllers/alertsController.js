const path = require('path');
const fs = require('fs')

const alertsController = {}

alertsController.writeAlertsInfo = (req, res, next) => {
    try {
    // fs.writeFileSync()
    // console.log('reqbody', req.body)
    // const destination = path.join(__dirname, '../../docker-test/.env')
    const { emailAddress, appPassword } = req.body
    console.log('alerts controller emailAddress, appPassword accepted!', 'entered email =>', emailAddress, 'enter appPassword =>', appPassword)
    return next()
    } catch (err) {
        return next ({ message: 'Error in alertsController =>', err })
    }
}


module.exports = alertsController