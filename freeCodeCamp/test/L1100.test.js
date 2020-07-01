/*const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, websiteDirectory, imagesDirectory;
  before(async () => {
    websiteDirectory = await getDirectoryContents('../website');
    imagesDirectory = await getDirectoryContents('../website/client/assets/images');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const filesAreCorrect = websiteDirectory.indexOf('header.png') < 0 && imagesDirectory.indexOf('header.png') >= 0;
    assert(filesAreCorrect && lastCommand[0] === 'mv' && /header\.png$/.test(lastCommand[1]) && /client\/assets\/images/.test(lastCommand[2]) && cwd === '/home/strove/project/website');
  });
});*/

// solution
