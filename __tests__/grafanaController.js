const controller = require('../main/controllers/grafanaController');

const { getPrometheus, createPromSource, generateDashJson, createDashboard} = controller;

fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({uid: 'f3re6'})
  })
);

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
  const next = jest.fn();

  beforeEach(() => {
    fetch.mockClear();
    next.mockClear();
  });

  test('check whether function skips itself if res.locals.prom is true', async () => {
    await getPrometheus(req, res2, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledTimes(0);
  });

  describe('handle successful API calls', () => {
    beforeEach(async () => {
      await getPrometheus(req, res, next);
    });

    test('the correct data is added to res.locals', () => {
      // await getPrometheus(req, res, next);
      expect(res.locals.promUid).toBe('f3re6');
      expect(res.locals.prom).toBe(true);
    });

    test('next is called once and only once', () => {
      // await getPrometheus(req, res, next);
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
  const next = jest.fn();

  beforeEach(() => {
    next.mockClear();
    fetch.mockClear();
  });

  test('check whether function skips itself if res.locals.prom is true', async () => {
    await createPromSource(req, res, next);
    console.log('res: ', res)
    expect(next).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledTimes(0);
  });

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