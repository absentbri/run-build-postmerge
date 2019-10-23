const execa = require('execa');

const query = 'diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD';

async function findChangedFiles() {
  const rootDir = await execa.stdout('git', ['rev-parse', '--show-toplevel']);
  const args = query.split(' '); // requires array
  const stdout = await execa.stdout('git', args, { cwd: rootDir });
  return (stdout || '').trim().split('\n');
}

module.exports = findChangedFiles;
