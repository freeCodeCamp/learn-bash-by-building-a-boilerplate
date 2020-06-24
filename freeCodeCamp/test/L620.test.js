const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(lastCommand[0] === 'cp' && lastCommand[1] === 'footer.jpeg' && lastCommand[2] === 'images/footer.jpeg' && cwd === '/home/strove/project/website');
  });
});

// solution
