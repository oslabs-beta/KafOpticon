const controller = require('../main/controllers/addressController');

const { writeJmxConfig1, writeJmxConfig2, checkForDocker, bootUpDocker, connectToKafka, startPrometheus } = controller;


// get fs module in here so that I can mock it
const fs = require('fs');
jest.mock('fs', () => {
  return {
    promises: {
      writeFile: jest.fn().mockResolvedValue('Hello World'),
      readFile: jest.fn().mockResolvedValue('cheese')
  }}
});

// console.log(fs);

// to test JmxConfig
  // do not test whether fs function works--test whether you are passing in correct inputs to fs functions
  // it is not your job to test node's fs module, it is your job to test your own code
  // mock in a request body
  // make sure the correct newFileString is created, both before fsp readFile is called and after ?? this may only be possible if writeJmxConfi is split up
  // make sure next is being called once and only once
describe ('writeJmxConfig1', () => {

  const req = {
    body: {
      address: 'localhost:2020'
    }
  };
  const res = {locals: {}};
  const next = jest.fn();

  beforeAll(() => {
    writeJmxConfig1(req, res, next);
  });

  test('adds jmxConfig property to res.locals that is correct', () => {
    expect(res.locals.jmxConfig).toBe('hostPort: localhost:2020\n');
  });

  test('next is called once and only once', () => {
    expect(next).toHaveBeenCalledTimes(1);
  });

});

describe('writeJmxConfig2', () => {
  const req = {};
  const res = {
    locals: {
      jmxConfig: 'hostPort: localhost:2020\n'
    }
  };
  const next = jest.fn();
  
  describe('handle successful fs API calls', () => {
    beforeAll(async () => {
      await writeJmxConfig2(req, res, next);
    });
  
    test('res.locals.jmxConfig is correct', () => {
      expect(res.locals.jmxConfig).toBe('hostPort: localhost:2020\ncheese');
    });
    
    test('next is called once and only once', () => {
      expect(next).toHaveBeenCalledTimes(1);
    });
  });
  
  describe('handle failed fs API calls', () => {
    test('calls global error handler if readFile errors out', async () => {
      // how to make readFile return a rejected promise?
      fs.promises.readFile = jest.fn().mockRejectedValueOnce(new Error('oh no'));

      await writeJmxConfig2(req, res, next);
      
      expect(next).toHaveBeenLastCalledWith(expect.objectContaining({
        log: 'An error occurred in addressController.writeJmxConfig2',
        status: 422
      }));
    });

    test('calls global error handler if writeFile errors out', async () => {
      fs.promises.writeFile = jest.fn().mockRejectedValueOnce(new Error('oh no'));

      await writeJmxConfig2(req, res, next);

      expect(next).toHaveBeenLastCalledWith(expect.objectContaining({
        log: 'An error occurred in addressController.writeJmxConfig2',
        status: 422
      }));
    });

    test('next is called once and only once in the event of a readFile error', () => {
      // how to do this?
    });

  });
 });