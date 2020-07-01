const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, fontsDirectory;
  before(async () => {
    fontsDirectory = await getDirectoryContents('../website/client/assets/fonts');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(fontsDirectory.indexOf('lato-bold.ttf') >= 0 && lastCommand[0] === 'touch' && /client\/assets\/fonts\/lato-bold\.ttf$/.test(lastCommand[1]) && cwd === '/home/strove/project/website');
  });
});
