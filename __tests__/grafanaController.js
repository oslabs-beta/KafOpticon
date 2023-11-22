const controller = require('../main/controllers/grafanaController');

const { getPrometheus, createPromSource, generateDashJson, createDashboard} = controller;
const generatedDashboard = require('../__mocks__/mockDashboards');

let next = jest.fn();

beforeEach(() => {
  fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({uid: 'f3re6'})
    }));

  next = jest.fn();
  fetch.mockClear();
  next.mockClear();
});

describe('getPrometheus', () => {
  const req = {};
  const res = {
    locals: {}
  };
  const res2 = {
    locals: {
      prom: true
    }
  };

  describe('', () => {
    test('check whether function skips itself if res.locals.prom is true', async () => {
      await getPrometheus(req, res2, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledTimes(0);
    });
  });

  describe('handle successful API calls', () => {
    beforeEach(async () => {
      await getPrometheus(req, res, next);
    });

    test('the correct data is added to res.locals', () => {
      expect(res.locals.promUid).toBe('f3re6');
      expect(res.locals.prom).toBe(true);
    });

    test('next is called once and only once', () => {
      expect(next).toHaveBeenCalledTimes(1);
    });
  });

  describe('handle failed API calls', () => {
    test('calls global error handler, passing in error object', async () => {
      res.locals = {};
      fetch = jest.fn().mockRejectedValueOnce(new Error('oh no'));
      await getPrometheus(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenLastCalledWith(expect.objectContaining({
        log: 'An error occurred in grafanaController.getPrometheus',
        status: 500
      }));
    });
  });
});

describe('createPromSource', () => {
  const req = {};
  const res = {
    locals: {
      prom: true
    }
  };

  describe('', () => {
    test('check whether function skips itself if res.locals.prom is true', async () => {
      await createPromSource(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledTimes(0);
    });
  });

  // we should write something in the code that handles/registers successful api calls
  // and then test it

  describe('handle failed API calls', () => {
    test('calls global error handler, passing in error object', async () => {
      res.locals = {};
      fetch = jest.fn().mockRejectedValueOnce(new Error('oh no'));
      await createPromSource(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenCalledWith(expect.objectContaining({
        log: 'An error occurred in grafanaController.createPromSource',
        status: 500
      }));
    });
  });
});

// this test is not good
// it will fail as soon as we change the bigDashboard.js
// maybe we could use environment variables to change it
describe('generateDashJson', () => {

  const req = {};
  const res = {locals: {
    promUid: 'testing'
  }};

  describe('', () => {
    test('changes uids to Prometheus\'s uid', async () => {
      await generateDashJson(req, res, next);
      expect(res.locals.dashboardJSON).toEqual(generatedDashboard);
    });
  });
});

describe('createDashboard', () => {
  const req = {};
  const res = {locals: {
    dashboardJSON: 'cheesy'
  }};

  describe('', () => {
    test('calls the API with the generatedDashboard', async () => {
      await createDashboard(req, res, next);
      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/dashboards/db', expect.objectContaining({
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(res.locals.dashboardJSON)
      }));
    });
  });

  describe('handle successful API calls', () => {
    test('the correct data is added to res.locals and next is called only once', async () => {
      await createDashboard(req, res, next);
      expect(res.locals.grafanaResponse).toEqual({uid: 'f3re6'});
      expect(next).toHaveBeenCalledTimes(1);
    });
  });

  describe('handle failed API calls', () => {
    test('calls global error handler, passing in error object', async () => {
      fetch = jest.fn().mockRejectedValueOnce(new Error('oh no'))
      await createDashboard(res, res, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenCalledWith(expect.objectContaining({
        log: 'An error occurred in grafanaController.createDashboard',
        status: 500,
      }));
    });
  });
});