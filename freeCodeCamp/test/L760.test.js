/*const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, websiteDirectory, fontsDirectory;
  before(async () => {
    websiteDirectory = await getDirectoryContents('../website');
    fontsDirectory = await getDirectoryContents('../website/fonts');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const filesAreCorrect = websiteDirectory.indexOf('roboto.woff') < 0 && fontsDirectory.indexOf('roboto.woff') >= 0;
    assert(filesAreCorrect && lastCommand[0] === 'mv' && /roboto\.woff$/.test(lastCommand[1]) && /fonts/.test(lastCommand[2]) && cwd === '/home/strove/project/website');
  });
});*/

// solution
