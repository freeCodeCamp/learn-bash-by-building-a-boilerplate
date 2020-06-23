const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const projectDirectory = await getDirectoryContents('..');
    const lastCommand = await getLastCommand();

    assert(projectDirectory.indexOf('website') >= 0 && lastCommand[0] === 'mkdir' && /website/g.test(lastCommand[1]));
  });
});
