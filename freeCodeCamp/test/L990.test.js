const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, clientDirectory;
  before(async () => {
    clientDirectory = await getDirectoryContents('../website/client');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(clientDirectory.indexOf('assets') >= 0 && lastCommand[0] === 'mkdir' && /assets/.test(lastCommand[1]) && cwd === '/home/strove/project/website/client');
  });
});

// solution
