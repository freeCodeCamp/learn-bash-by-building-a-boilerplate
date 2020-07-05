/*const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, projectDirectory;
  before(async () => {
    projectDirectory = await getDirectoryContents('..');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const filesAreCorrect = projectDirectory.indexOf('website') < 0 && projectDirectory.indexOf('website-boilerplate') >= 0;
    assert(filesAreCorrect && lastCommand[0] === 'mv' && /website/.test(lastCommand[1]) && /website-boilerplate/.test(lastCommand[2]) && cwd === '/home/strove/project');
  });
});*/

// solution
