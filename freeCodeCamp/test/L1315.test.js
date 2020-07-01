/*const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, websiteDirectory;
  before(async () => {
    websiteDirectory = await getDirectoryContents('../website');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const flags = ['-r', '-R', '--recursive'];
    const correctArguments1 = /fonts/.test(lastCommand[1]) && flags.indexOf(lastCommand[2]) >= 0;
    const correctArguments2 = /fonts/.test(lastCommand[2]) && flags.indexOf(lastCommand[1]) >= 0;
    const correctArgs = correctArguments1 || correctArguments2;
    assert(websiteDirectory.indexOf('fonts') < 0 && lastCommand[0] === 'rm' && correctArgs && cwd === '/home/strove/project/website');
  });
});*/

// solution
