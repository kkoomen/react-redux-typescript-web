# Introduction

An extension of create-react-app 2 (ejected) with some extras:

- [x] hot reloading :fire:
- [x] linters (tslint)
- [x] redux
- [x] redux-thunk
- [x] routing
- [x] basic structure
- [ ] local storage (for redux state persistance)
- [ ] ImmutableJS
- [ ] Bootstrap 4
- [ ] i18n

This extension also has built-in support for the following extensions:

- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension#installation)

# Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open http://localhost:3000 to view it in the browser.<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.<br />

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about running tests for more information.

### `yarn test:update`

Same as `yarn test` but before going into an interactive watch mode it will
update all the snapshots.

### `yarn build`

Builds the app for production to the build folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `yarn plop`

Use this command to generate components, containers, actions & reducers.<br />
Especially because of the typescript usage making a component and writing basic
tests may take a long time. Use the generator to instantly create components,
containers, actions & reducers that have basic tests and correct typings setup
already. Also a more consistent code style will be used throughout the codebase
if generators are used.

# Getting started

- Clone the repository
- (optional, but recommended) Go into `package.json` and set the `name` property
  at the top to your new project its name.
- Run `yarn install`
- Run `yarn start`
