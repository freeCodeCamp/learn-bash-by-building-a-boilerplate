const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(lastCommand[0] === 'echo' && lastCommand[1] === 'hello' && lastCommand[2] === 'website' && cwd === '/home/strove/project/website');
  });
});

// solution
