const path = require('path');

const findChangedFiles = require('./lib/git');
const run = require('./lib/run');
const getConfig = require('./lib/config');

async function runBuildPostMerge(_options = {}) {
  const cwd = getCWD();
  const config = getConfig(cwd);

  const options = Object.assign({}, config, _options);
  const files = await findChangedFiles();
  const foundTargets = [];

  console.log(config);
  console.log(files);
  files.forEach(file => {
    options.paths.forEach(path => {
      if(file.indexOf(path) > -1){
        foundTargets.push(file);
        return true;
      }
    });
  });

  if (!foundTargets.length) return false;

  await run();

  return true;
}

function getCWD() {
  return path.dirname(__filename.split('node_modules')[0])
}


module.exports = runBuildPostMerge;

if (require.main === module) runBuildPostMerge();