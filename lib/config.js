const cosmiconfig = require('cosmiconfig');

export default function getConfig(dir) {
    const explorer = cosmiconfig('runbuildpostmerge');
    const { config = {} } = explorer.searchSync(dir) || {};
  
    const defaults = {
      paths: [ "src/" ],
      script: "build"
    };
  
    return Object.assign({}, defaults, config);
  }