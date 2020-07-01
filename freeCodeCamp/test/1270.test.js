const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const fontsDirectory = await getDirectoryContents('../website/client/assets/fonts');
    const lastCommand = await getLastCommand();

    assert(fontsDirectory.indexOf('roboto-light.woff') >= 0 && lastCommand[0] === 'touch' && /client\/assets\/fonts\/roboto-light\.woff$/.test(lastCommand[1]));
  });
});
