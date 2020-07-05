const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();

    assert(websiteDirectory.indexOf('README.md') >= 0 && lastCommand[0] === 'touch' && /README\.md$/.test(lastCommand[1]));
  });
});
