# tslint-config-mycujoo-base

## Introduction

This is the base TSLint configuration file used at mycujoo.

It is based on [Airbnb's config](https://www.npmjs.com/package/tslint-config-airbnb-base).

## Installation

### NPM

```
npm install --save-dev tslint@latest @mycujoo/tslint-config-mycujoo-base
```

### Yarn

```
yarn add --exact --dev tslint@latest @mycujoo/tslint-config-mycujoo-base
```

### Your `tslint.json`

To add the rules to your `tslint.json`, extend the file with the package in the following manner:

```
{
  "extends": ["@mycujoo/tslint-config-mycujoo-base"]
}
```
