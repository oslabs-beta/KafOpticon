
const path = require('path');
const { spawn } = require('child_process');

const dashboardJSON = require('../dashboards/bigDashboard');
// const dashboardJSON = require('../dashboards/dashboard');
// const performanceBody = require('../dashboards/performance');
// const testDbJson = require('../dashboards/test');

const grafanaController = {};

class GrafanaError {
  constructor(location, status, message) {
    this.log = 'An error occurred in grafanaController.' + location;
    this.status = status;
    this.message = {err: message};
  }
}

grafanaController.getPrometheus = async (req, res, next) => {
  // console.log('entered getPrometheus');
  // get the uid of local user's prometheus data source
  if (res.locals.prom) return next();
  try {
    const response = await fetch('http://localhost:3000/api/datasources/name/Prometheus');
    const data = await response.json();
    
    if (data.uid) {
      res.locals.promUid = data.uid;
      res.locals.prom = true;
    }

  } catch (err) {
    return next(new GrafanaError('getPrometheus', 500, err));
  }
  
  return next();
};

grafanaController.createPromSource = async (req, res, next) => {
  // if the user does not have prometheus set up as a data source, create it
  console.log('entered createPromSource');

  if (res.locals.prom) return next();

  const body = {
    name: 'Prometheus',
    type: 'prometheus',
    url: 'http://localhost:9090',
    access: 'proxy',
    basicAuth: false
  };

  try {
    const response = await fetch('http://localhost:3000/api/datasources', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log('response to create request: ', data);
  } catch (err) {
    return next(new GrafanaError('createPromSource', 500, err));
  }

  return next();
};

grafanaController.generateDashJson = (req, res, next) => {
  // generate the dashboard json based on gathered (or generated) prometheus uid
  console.log('entered generateDashJson');

  try { const array = dashboardJSON.dashboard.panels;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].datasource.uid !== undefined) array[i].datasource.uid = res.locals.promUid;
    if (array[i].targets) {
      if (array[i].targets[0].datasource.uid !== undefined) array[i].targets[0].datasource.uid = res.locals.promUid;
    }
  }
} catch (err){
  return next(new GrafanaError('generateDashJson', 500, err));
}
  next();
};

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
      // body: JSON.stringify(performanceBody),
      body: JSON.stringify(dashboardJSON),
      // body: JSON.stringify(testDbJson),
      headers: {
        "Content-Type": 'application/json'
      }});
    

    const text = await data.json();
    res.locals.grafanaResponse = text;
    console.log('grafanaController.createDashboard= ~ text:', text);
    
  } catch (err) {
    next(new GrafanaError('createDashboard', 500, err));
  }

  next();
};

module.exports = grafanaController;