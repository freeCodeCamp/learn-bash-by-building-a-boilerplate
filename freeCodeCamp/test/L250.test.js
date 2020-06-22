const assert = require('assert');
const { getLastCommand, getCwd, getPreviousCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, previousCwd;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
    previousCwd = await getPreviousCwd();
  });

  it('should pass', async () => {
    assert(lastCommand[0] === 'cd' && cwd === '/home/strove/project' && previousCwd === '/home/strove/project/freeCodeCamp/node_modules');
  });
});

// solution
