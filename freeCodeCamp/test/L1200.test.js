const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, assetsDirectory;
  before(async () => {
    assetsDirectory = await getDirectoryContents('../website/client/assets');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(assetsDirectory.indexOf('icons') >= 0 && lastCommand[0] === 'mkdir' && /client\/assets\/icons/.test(lastCommand[1]) && cwd === '/home/strove/project/website');
  });
});
