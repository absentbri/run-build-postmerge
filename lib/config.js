const cosmiconfig = require('cosmiconfig');

export default function getConf(dir) {
    const explorer = cosmiconfig('runbuildpostmerge')
    const { config = {} } = explorer.searchSync(dir) || {}
  
    const defaults = {
      skipCI: true
    }
  
    return { ...defaults, ...config }
  }