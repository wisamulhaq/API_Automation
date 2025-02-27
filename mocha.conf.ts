const { execSync } = require('child_process');
const path = require('path');

let filePath = "<Path_of_your_test>"
function runTests() {

  const timeout = 20000;
  const reporter = 'mochawesome';
  const outputDirectory = './reports'
  
  const command = `npx mocha --require ts-node/register --reporter ${reporter} --reporter-options reportDir=${outputDirectory} --timeout=${timeout} ${filePath}`
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    process.exitCode = 1;
  }
}
// Check if the script is being executed directly
if (require.main === module) {
  runTests();
}
