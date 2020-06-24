const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, websiteDirectory, srcDirectory;
  before(async () => {
    websiteDirectory = await getDirectoryContents('../website');
    srcDirectory = await getDirectoryContents('../website/client/src');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const filesAreCorrect = websiteDirectory.indexOf('index.js') < 0 && srcDirectory.indexOf('index.js') >= 0;
    assert(filesAreCorrect && lastCommand[0] === 'mv' && /index\.js$/.test(lastCommand[1]) && /client\/src/.test(lastCommand[2]) && cwd === '/home/strove/project/website');
  });
});
