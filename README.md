# @jeonbyeongmin/eslint-config

By default, this package includes the following configurations:

- [@jeonbyeongmin/eslint-config](./index.js) - ESLint config for JavaScript
- [@jeonbyeongmin/eslint-config/react](./react.js) - ESLint config for React

And if your `package.json` includes `typescript` in `devDependencies`, it also automatically configures TypeScript. Jest also works the same way.

### Installation

```bash
npm install --save-dev @jeonbyeongmin/eslint-config eslint
```

If you use yarn berry, you have to install [@rushstack/eslint-patch]([@rushstack/eslint-patch](https://yarnpkg.com/package/@rushstack/eslint-patch)) too. Check this [issues](https://github.com/yarnpkg/berry/issues/8#issuecomment-681069562)

```bash
yarn add --dev @jeonbyeongmin/eslint-config eslint @rushstack/eslint-patch
```

### Usage

1. Create `.eslintrc.json` file in your project root directory.

```json
{
  "extends": "@jeonbyeongmin/eslint-config", 
  "overrides": []
}
```
```json
{
   "extends": "@jeonbyeongmin/eslint-config/react"
   "overrides": []
}
```

2. If you use yarn berry, you have to use `js` format. And import `@rushstack/eslint-patch` like this.
```js
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: '@jeonbyeongmin/eslint-config',
  overrides: []
};

```

