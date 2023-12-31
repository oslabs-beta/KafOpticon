
const path = require('path');
const { spawn } = require('child_process');

const { question } = require('../../__mocks__/mockDashboards')
const dashboardJSON = require('../dashboards/bigDashboard');

const grafanaController = {};

class GrafanaError {
  constructor(location, status, message) {
    this.log = 'An error occurred in grafanaController.' + location;
    this.status = status;
    this.message = {err: message};
  }
}

grafanaController.getPrometheus = async (req, res, next) => {
  console.log('entered getPrometheus');
  // check whether the user already has a prometheus datasource for their grafana
  // and if they do save its uid

  // since this is called twice, if information has already been gathered, skip it
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

  // skip if user has prometheus and we already have its uid
  if (res.locals.prom) return next();

  const body = {
    name: 'Prometheus',
    type: 'prometheus',
    url: 'http://localhost:9090',
    access: 'proxy',
    basicAuth: false
  };

  try {
    await fetch('http://localhost:3000/api/datasources', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    return next(new GrafanaError('createPromSource', 500, err));
  }

  return next();
};

grafanaController.generateDashJson = (req, res, next) => {
  // generate the dashboard json based on gathered prometheus uid
  console.log('entered generateDashJson');

  try { 
    const array = (process.env.NODE_ENV === 'test') ? question.dashboard.panels : dashboardJSON.dashboard.panels; 
    for (let i = 0; i < array.length; i += 1) {
      array[i].datasource.uid = res.locals.promUid;
      if (array[i].targets) {
        for (let j = 0; j < array[i].targets.length; j += 1) {
          array[i].targets[j].datasource.uid = res.locals.promUid
        }
      }
    }
  } catch (err){
    return next(new GrafanaError('generateDashJson', 500, err));
  }

  res.locals.dashboardJSON = (process.env.NODE_ENV === 'test') ? question : dashboardJSON;
  return next();
};

grafanaController.createDashboard = async (req, res, next) => {
  // create a dashboard in grafana

  console.log('entered createDashboard');
  // make post request to grafana dashboard api 
  try {
    const data = await fetch('http://localhost:3000/api/dashboards/db', {
      method: 'POST',
      body: JSON.stringify(res.locals.dashboardJSON),
      headers: {
        "Content-Type": 'application/json'
      }});
    
    const text = await data.json();
    console.log('grafanaController.createDashboard= ~ text:', text);

    // save response to res.locals for testing purposes
    res.locals.grafanaResponse = text;    

    return next();
    
  } catch (err) {
    return next(new GrafanaError('createDashboard', 500, err));
  }
};

module.exports = grafanaController;