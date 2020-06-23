const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
		const correctFlag = lastCommand[1] === '-a' || lastCommand[1] === '--all';
    assert(lastCommand[0] === 'ls' && correctFlag && cwd === '/home/strove/project/website');
  });
});
