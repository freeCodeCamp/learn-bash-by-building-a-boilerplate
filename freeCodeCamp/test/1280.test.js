const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const fontsDirectory = await getDirectoryContents('../website/client/assets/fonts');
    const lastCommand = await getLastCommand();

    assert(fontsDirectory.indexOf('lato-bold.ttf') >= 0 && lastCommand[0] === 'touch' && /client\/assets\/fonts\/lato-bold\.ttf$/.test(lastCommand[1]));
  });
});
