const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, imagesDirectory;
  before(async () => {
    imagesDirectory = await getDirectoryContents('../website/client/assets/images');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(imagesDirectory.indexOf('background.jpg') >= 0 && lastCommand[0] === 'touch' && /background\.jpg$/.test(lastCommand[1]) && cwd === '/home/strove/project/website/client/assets/images');
  });
});

// solution
