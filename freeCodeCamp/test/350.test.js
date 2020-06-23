const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();

    assert(websiteDirectory.indexOf('index.js') >= 0 && lastCommand[0] === 'touch' && /index\.js$/.test(lastCommand[1]));
  });
});
