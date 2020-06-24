const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, imagesDirectory;
  before(async () => {
    imagesDirectory = await getDirectoryContents('../website/images');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(imagesDirectory.indexOf('background.jpg') >= 0 && lastCommand[0] === 'cp' && /background\.jpg$/.test(lastCommand[1]) && /images/.test(lastCommand[2]) && cwd === '/home/strove/project/website');
  });
});

// solution
