const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const cmd0 = lastCommand[0] === 'cd';
    const cmd1 = lastCommand[1] === 'coderoad' || lastCommand[1] === 'coderoad/';
    assert(cmd0 && cmd1 && cwd === '/home/strove/project/coderoad');
  });
});

// solution
