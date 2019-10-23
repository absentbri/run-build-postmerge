#!/usr/bin/env node
const run = require('../index.js');

console.log('');
console.log('*** Sources Automated Build Script ***');
run()
  .then(build => console.log(build ? 'Build Completed!' : 'No Build Required!'))
  .catch(err => console.error('An error occurred...\n', err));