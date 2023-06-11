const defaults = require('./configs/defaults.js');
const isPackageInclude = require('./utils/is-package-include.js');

if (isPackageInclude('typescript')) {
  defaults.extends.push('@jeonbyeongmin/eslint-config/configs/typescript');
}

if (isPackageInclude('jest')) {
  defaults.extends.push('@jeonbyeongmin/eslint-config/configs/jest');
}

module.exports = defaults;
