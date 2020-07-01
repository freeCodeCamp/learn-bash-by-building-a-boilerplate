const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(lastCommand[0] === 'rm' && lastCommand[1] === '-r' && lastCommand[2] === 'fonts' && cwd === '/home/strove/project/website');
  });
});

// solution
