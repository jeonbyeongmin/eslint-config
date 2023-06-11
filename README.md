# @jeonbyeongmin/eslint-config

By default, this package includes the following configurations:

- [@jeonbyeongmin/eslint-config](./index.js) - ESLint config for JavaScript
- [@jeonbyeongmin/eslint-config/react](./react.js) - ESLint config for React

And if your `package.json` includes `typescript` in `devDependencies`, it also automatically configures TypeScript. Jest also works the same way.

### Installation

```bash
npm install --save-dev @jeonbyeongmin/eslint-config eslint
```

```bash
yarn add --dev @jeonbyeongmin/eslint-config eslint
```

### Usage

1. Create `.eslintrc.json` file in your project root directory.

```json
{
   "extends": "@jeonbyeongmin/prettier-config",
   "overrides": {}
}
```

2. If you use React, create `.eslintrc.json` file in your project root directory.

```json
{
   "extends": "@jeonbyeongmin/prettier-config/react"
   "overrides": {}
}
```
