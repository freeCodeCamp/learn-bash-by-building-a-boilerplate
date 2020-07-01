const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, websiteDirectory, iconsDirectory;
  before(async () => {
    websiteDirectory = await getDirectoryContents('../website');
    iconsDirectory = await getDirectoryContents('../website/client/assets/icons');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const filesAreCorrect = websiteDirectory.indexOf('Strove.svg') < 0 && iconsDirectory.indexOf('Strove.svg') >= 0;
    assert(filesAreCorrect && lastCommand[0] === 'mv' && /Strove\.svg$/.test(lastCommand[1]) && /client\/assets\/icons/.test(lastCommand[2]) && cwd === '/home/strove/project/website');
  });
});
