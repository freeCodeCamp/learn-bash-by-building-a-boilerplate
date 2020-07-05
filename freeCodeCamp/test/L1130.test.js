/*const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, imagesDirectory1, imagesDirectory2;
  before(async () => {
    imagesDirectory1 = await getDirectoryContents('../website/images');
    imagesDirectory2 = await getDirectoryContents('../website/client/assets/images');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const filesAreCorrect = imagesDirectory1.indexOf('footer.jpeg') < 0 && imagesDirectory2.indexOf('footer.jpeg') >= 0;
    assert(filesAreCorrect && lastCommand[0] === 'mv' && /images\/footer\.jpeg$/.test(lastCommand[1]) && /client\/assets\/images/.test(lastCommand[2]) && cwd === '/home/strove/project/website');
  });
});*/

// solution
