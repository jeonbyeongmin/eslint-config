const path = require('node:path');

function isPackageInclude(name) {
  const root = process.cwd();

  if (!root) {
    return false;
  }

  const packageJson = require(path.resolve(root, 'package.json'));

  return Boolean(packageJson.devDependencies && packageJson.devDependencies[name]);
}

module.exports = isPackageInclude;
