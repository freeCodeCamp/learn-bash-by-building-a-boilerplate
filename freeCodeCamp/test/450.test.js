const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();

  it('should pass', async () => {
    assert(websiteDirectory.indexOf('roboto.font') >= 0 && lastCommand[0] === 'touch' && /roboto\.font$/.test(lastCommand[1]));
  });
});
