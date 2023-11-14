
const path = require('path');
const { spawn } = require('child_process');

const performanceBody = require('../dashboards/performance');

const grafanaController = {};

class GrafanaError {
  constructor(location, status, message) {
    this.log = 'An error occurred in grafanaController.' + location;
    this.status = status;
    this.message = {err: message};
  }
}


grafanaController.startGrafana = (req, res, next) => {
  // create a child process that boots up grafana
  console.log('entered startGrafana');

  const child = spawn('brew services start grafana', {
    shell: true,
    stdio: 'inherit'
  });

  child.on('close', () => {
    next();
  });
};

grafanaController.createDashboard = async (req, res, next) => {
  // create a dashboard in grafana

  console.log('entered createDashboard');
  // make post request to grafana dashboard api 
  try {
    const data = await fetch('http://localhost:3000/api/dashboards/db', {
      method: 'POST',
      body: JSON.stringify(performanceBody),
      headers: {
        "Content-Type": 'application/json'
      }});
    

    const text = await data.json();
    res.locals.grafanaResponse = text;
    // console.log('grafanaController.createDashboard= ~ text:', text);
    
  } catch (err) {
    next(new GrafanaError('createDashboard', 500, err));
  }

  next();
};

grafanaController.getDashboard = async (req, res, next) => {
  // get information about the just-created dashboard so that the iframe url can be dynamically updated
  console.log('entered getDashboard');
  const uid = res.locals.grafanaResponse.uid;
  // console.log('grafanaController.getDashboard= ~ uid:', uid);
  const url = 'http://localhost:3000/api/dashboards/uid/' + uid;
  // console.log('grafanaController.getDashboard= ~ url:', url);
  
  try {
    const response = await fetch(url);
    const dashboard = await response.text();
    res.locals.dashboard = dashboard;
  } catch (err) {
    next(new GrafanaError('getDashboard', 500, err));
  }

  next();
};

module.exports = grafanaController;