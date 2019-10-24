const yarnOrNpm = require('yarn-or-npm');
const execa = require('execa');

function runBuild(client, options = { stdio: 'inherit' }) {
  const args = ['run', 'build'];
  return execa.stdout(chooseClient(), args, options)
    .catch(err => {
      console.error('Cannot run build process...');
      process.exitCode = 1
    });
}

function chooseClient() {
  return yarnOrNpm();
}

module.exports = runBuild;
