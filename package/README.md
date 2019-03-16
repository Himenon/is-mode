# is-mode

## Install

```sh
npm i is-mode
```

```sh
yarn add is-mode
```

## Usage

### If Browser

```ts
import { isMode } from "is-mode";

// http://localhost?mode=abc
isMode("abc") === true // true
```

Change check params

```ts
import { isMode, setup } from "is-mode";

setup({
  modeKey: "newMode"
})

// http://localhost?newMode=abc
isMode("abc") === true // true
```

### If Server Side

```ts
import { isMode } from "is-mode";

// in server side
isMode("abc") === false // true
```

## Update

```sh
yarn outdated
yarn upgrade
```

## Publish

```
yarn publish
```

## Badges

[![npm version](https://badgen.net/npm/v/is-mode)](https://npm.im/is-mode)
[![Build Status](https://travis-ci.com/is-mode.svg?branch=master)](https://travis-ci.com/is-mode)
[![codecov](https://codecov.io/gh/is-mode/branch/master/graph/badge.svg)](https://codecov.io/gh/is-mode)
[![dependencies Status](https://david-dm.org/is-mode/status.svg)](https://david-dm.org/is-mode)
[![devDependencies Status](https://david-dm.org/is-mode/dev-status.svg)](https://david-dm.org/is-mode?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## License

MIT
