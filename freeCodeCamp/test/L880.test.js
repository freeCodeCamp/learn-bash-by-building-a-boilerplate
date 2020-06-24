const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const correctArgs = lastCommand[1] === undefined || lastCommand[1] === '.' || lastCommand[1] === './';
    assert(lastCommand[0] === 'find' && correctArgs && cwd === '/home/strove/project/website');
  });
});

// solution
