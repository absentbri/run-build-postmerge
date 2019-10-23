const findChangedFiles = require('./lib/git');
const run = require('./lib/run');
const paths = ['/src'];

async function runBuildPostMerge(_options = {}) {
  const options = Object.assign({}, { paths }, _options);
  const files = await findChangedFiles();
  const foundTargets = [];

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

module.exports = runBuildPostMerge;

if (require.main === module) runBuildPostMerge();