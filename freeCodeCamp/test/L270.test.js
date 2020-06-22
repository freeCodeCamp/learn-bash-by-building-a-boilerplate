const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
  });

  it('should pass', async () => {
    assert(lastCommand[0] === 'clear');
  });
});
