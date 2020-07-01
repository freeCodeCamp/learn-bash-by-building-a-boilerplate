const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const assetsDirectory = await getDirectoryContents('../website/client/assets');
    const lastCommand = await getLastCommand();

    assert(assetsDirectory.indexOf('fonts') >= 0 && lastCommand[0] === 'mkdir' && /client\/assets\/fonts/.test(lastCommand[1]));
  });
});
