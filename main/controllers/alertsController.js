const path = require('path');
const fs = require('fs')
const ini = require('ini')

//accepts user input to forward alerts to emails by writing information to grafana.ini config file
//must restart grafana after to take effect
const alertsController = {}

alertsController.writeAlertsInfo = (req, res, next) => {
    try {
    const destination = path.join(__dirname, '../../grafana/grafana.ini')

    const { emailAddress, appPassword } = req.body
    console.log('alerts controller emailAddress, appPassword accepted!', 'entered email =>', emailAddress, 'enter appPassword =>', appPassword)

    //read grafana.ini file
        const config = ini.parse(fs.readFileSync(destination, 'utf-8'))

    //update grafana.ini files
        config['smtp'] = config['smtp'] || {};
        config['smtp']['user'] = emailAddress;
        config['smtp']['password'] = appPassword;
        config['smtp']['from_address'] = emailAddress;

    //update grafana.ini files
        fs.writeFileSync(destination, ini.stringify(config));
    
    return next()
    } catch (err) {
        return next ({ message: 'Error in alertsController =>', err })
    }
}


module.exports = alertsController