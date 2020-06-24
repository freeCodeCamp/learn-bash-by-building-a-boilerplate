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
    const filesAreCorrect = websiteDirectory.indexOf('lato.font') < 0 && websiteDirectory.indexOf('lato.ttf') >= 0;
    assert(filesAreCorrect && lastCommand[0] === 'mv' && /lato\.font$/.test(lastCommand[1]) && /lato\.ttf/.test(lastCommand[2]) && cwd === '/home/strove/project/website');
  });
});

// solution
