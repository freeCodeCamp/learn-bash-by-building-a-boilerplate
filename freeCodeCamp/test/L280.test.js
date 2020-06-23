const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, projectDirectory;
  before(async () => {
    projectDirectory = await getDirectoryContents('..');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(projectDirectory.indexOf('website') >= 0 && lastCommand[0] === 'mkdir' && /website/g.test(lastCommand[1]) && cwd === '/home/strove/project');
  });
});

// solution
