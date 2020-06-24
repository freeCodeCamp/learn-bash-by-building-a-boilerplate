const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();

    assert(websiteDirectory.indexOf('lato.font') >= 0 && lastCommand[0] === 'touch' && /lato\.font$/.test(lastCommand[1]));
  });
});
