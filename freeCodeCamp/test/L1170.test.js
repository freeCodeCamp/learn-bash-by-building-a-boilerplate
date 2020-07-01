/*const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, imagesDirectory;
  before(async () => {
    imagesDirectory = await getDirectoryContents('../website/images');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(imagesDirectory.indexOf('background.jpg') < 0 && lastCommand[0] === 'rm' && /background\.jpg/.test(lastCommand[1]) && cwd === '/home/strove/project/website');
  });
});*/

// solution
