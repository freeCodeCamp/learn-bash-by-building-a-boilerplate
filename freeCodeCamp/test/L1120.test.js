const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(lastCommand[0] === 'find' && lastCommand[1] === '-name' && lastCommand[2] === 'footer.jpeg' && cwd === '/home/strove/project/website');
  });
});
