const path = require('path');
const fs = require('fs')
// const yaml = require('js-yaml')
const ini = require('ini')


const alertsController = {}

alertsController.writeAlertsInfo = (req, res, next) => {
    try {
    // fs.writeFileSync()
    // const destination = path.join(__dirname, '../../docker-test/docker-compose.yml')
    const destination = path.join(__dirname, '../../grafana/grafana.ini')

    const { emailAddress, appPassword } = req.body
    console.log('alerts controller emailAddress, appPassword accepted!', 'entered email =>', emailAddress, 'enter appPassword =>', appPassword)
    //read docker-compse.yml file
    // const doc = yaml.load(fs.readFileSync(destination, 'utf-8'))
        //read grafana.ini file
        const config = ini.parse(fs.readFileSync(destination, 'utf-8'))

            //update grafana.ini files
        config['smtp'] = config['smtp'] || {};
        config['smtp']['user'] = emailAddress;
        config['smtp']['password'] = appPassword;
        config['smtp']['from_address'] = emailAddress;

            //update grafana.ini files
        fs.writeFileSync(destination, ini.stringify(config));
    //update the docker-compose files
    // doc.services.grafana.environment.GRAFANA_EMAIL_USERNAME = emailAddress
    // doc.services.grafana.environment.GRAFANA_EMAIL_PASSWORD = appPassword
    
    //write back to the file
    // fs.writeFileSync(destination, yaml.dump(doc))
    return next()
    } catch (err) {
        return next ({ message: 'Error in alertsController =>', err })
    }
}


module.exports = alertsController