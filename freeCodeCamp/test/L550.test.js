const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, directoryContents;
  before(async () => {
    directoryContents = await getDirectoryContents('../website/images');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(directoryContents.indexOf('background.jpg') >= 0 && lastCommand[0] === 'cp' && /background.jpg/g.test(lastCommand[1]) && /images/g.test(lastCommand[2]) && cwd === '/home/strove/project/website');
  });
});

// solution
