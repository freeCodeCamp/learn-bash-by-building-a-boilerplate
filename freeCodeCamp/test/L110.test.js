const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(lastCommand[0] === 'more' && lastCommand[1] === 'package.json' && cwd === '/home/strove/project/freeCodeCamp');
  });
});
