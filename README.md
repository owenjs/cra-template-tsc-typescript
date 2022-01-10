# cra-template-3sc-typescript

3 Sided Cude's typescript template for [Create React App](https://create-react-app.dev/).

## Usage

Add `--template 3sc-typescript` when creating a new app.

```shell
npx create-react-app my-app --template 3sc-typescript

# or

yarn create react-app my-app --template 3sc-typescript
```

### What's included?

- `ts` and `scss` added to the default cra template
- `eslint`, `prettier` and `stylelint` configs
- `react-app-rewired` overrides for `react-scripts`
  - see `config-overrides.js`
- pre-commit hook added using `husky`
  - see npm script `pre-commit` in package.json
- `lint-staged` config for eslint, stylelint and type checking

## Development

[Official Docs](https://create-react-app.dev/docs/custom-templates/)

To test the template with yarn use:
```shell
yarn create react-app my-app --template file:../path/to/template/cra-template-tsc-typescript
```
