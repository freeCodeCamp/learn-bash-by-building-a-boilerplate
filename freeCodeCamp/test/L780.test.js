const assert = require('assert');
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
    const filesAreCorrect = websiteDirectory.indexOf('lato.ttf') < 0 && fontsDirectory.indexOf('lato.ttf') >= 0;
    assert(filesAreCorrect && lastCommand[0] === 'mv' && /lato\.ttf$/.test(lastCommand[1]) && /fonts/.test(lastCommand[2]) && cwd === '/home/strove/project/website');
  });
});

// solution
