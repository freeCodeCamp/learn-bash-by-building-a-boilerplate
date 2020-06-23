const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, directoryContents;
  before(async () => {
    directoryContents = await getDirectoryContents('..');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(directoryContents.indexOf('website') >= 0 && lastCommand[0] === 'mkdir' && /website/g.test(lastCommand[1]) && cwd === '/home/strove/project');
  });
});

// solution
