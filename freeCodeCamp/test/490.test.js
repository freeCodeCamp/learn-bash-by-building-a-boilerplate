const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();

    assert(websiteDirectory.indexOf('CodeAlly.svg') >= 0 && lastCommand[0] === 'touch' && /CodeAlly\.svg$/.test(lastCommand[1]));
  });
});
