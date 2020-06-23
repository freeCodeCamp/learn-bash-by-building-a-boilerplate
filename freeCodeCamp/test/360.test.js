const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();

    assert(websiteDirectory.indexOf('.gitignore') >= 0 && lastCommand[0] === 'touch' && /\.gitignore$/.test(lastCommand[1]));
  });
});
