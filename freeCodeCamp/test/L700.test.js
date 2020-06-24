const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, websiteDirectory;
  before(async () => {
    websiteDirectory = await getDirectoryContents('../website');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const filesAreCorrect = websiteDirectory.indexOf('roboto.font') < 0 && websiteDirectory.indexOf('roboto.woff') >= 0;
    assert(filesAreCorrect && lastCommand[0] === 'mv' && /roboto\.font$/.test(lastCommand[1]) && /roboto\.woff$/.test(lastCommand[2]) && cwd === '/home/strove/project/website');
  });
});

// solution
