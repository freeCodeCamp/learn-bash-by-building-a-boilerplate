const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(lastCommand[0] === 'rmdir' && /images/.test(lastCommand[1]) && !/assets/.test(lastCommand[1]) && lastCommand[2] === undefined && cwd === '/home/strove/project/website');
  });
});

// solution
