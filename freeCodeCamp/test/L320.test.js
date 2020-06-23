const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, websiteDirectory;
  before(async () => {
    websiteDirectory = await getDirectoryContents('../website');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(websiteDirectory.indexOf('index.html') >= 0 && lastCommand[0] === 'touch' && /index\.html$/.test(lastCommand[1]) && cwd === '/home/strove/project/website');
  });
});

// solution
