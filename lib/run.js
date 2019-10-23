const yarnOrNpm = require('yarn-or-npm');
const execa = require('execa');
const readPkg = require('read-pkg');
const config = require('./config')

function runBuild(client, options = { stdio: 'inherit' }) {

  const pkg = getPackage();

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

function getPackage() {
  let pkg
  try {
    pkg = readPkg.sync({ cwd: getCWD(), normalize: false });
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err
    }
  }
  return pkg;
}

function getCWD() {
  return path.resolve(scriptPath.split('node_modules')[0]);
}

module.exports = runBuild;
