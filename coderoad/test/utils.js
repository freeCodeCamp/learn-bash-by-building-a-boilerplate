const fs = require('fs');
const util = require('util');
const path = require('path');
const parseCommand = require('shell-quote').parse;

const readFile = util.promisify(fs.readFile);

const getLastCommand = async (dir = process.cwd()) => {
  const pathToBashLogs = path.join(dir, '../../', '.bash_history');
  const bashLogs = await readFile(pathToBashLogs, 'utf8');

  if (!bashLogs) {
    throw new Error(`Could not find ${pathToBashLogs}`);
  }

  const logs = bashLogs.split('\n');
  const lastLog = logs[logs.length - 2];
  const parsedCommand = parseCommand(lastLog);

  return parsedCommand;
};

const getCwd = async (dir = process.cwd()) => {
  const pathToCwdLogs = path.join(dir, './test', '.cwd');
  const cwdLogs = await readFile(pathToCwdLogs, 'utf8');

  if (!cwdLogs) {
    throw new Error(`Could not find ${pathToCwdLogs}`);
  }

  const logs = cwdLogs.split('\n');
  const lastLog = logs[logs.length - 2];

  return lastLog;
};

exports.getLastCommand = getLastCommand;
exports.getCwd = getCwd;
