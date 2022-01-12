# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Local Development

### Project Structure
Most of the code lives in the `src` folder and looks like this:
```sh
src
|
+-- api         # exported API request declarations for the application
|
+-- assets      # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components  # shared components used across the entire application
|
+-- config      # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- constants   # shared constants used across the entire application
|
+-- hooks       # shared custom hooks used across the entire application
|
+-- pages       # centralised location for route-level components
|
+-- style       # shared styles for the entire application
|
+-- types       # base types used across the application
|
+-- utils       # shared utility functions
```

Inspired by [Bulletproof React](https://github.com/alan2207/bulletproof-react)

### CSS

All styles should be written using the [ITCSS architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/). A ITCSS boilderplate has been added to the `src/style` folder. CSS modules can be used which won't follow ITCSS.

Stylelint is used to enforce conventions for all the styles written. Some key conventions to note:
- An order to the CSS rules is enforced, but don't worry your newly rewritten rules should be reordered for you automatically once you save a file.
  - [Here is the order that is enforced](https://github.com/stormwarning/stylelint-config-recess-order/blob/main/index.js)
- All selectors should be written in kebab-case. That meaning written in lower case and each word comma seperated. For example: 
  - `.c-my-classname {}` ✅
  - `.cMyClassname {}` ❌
  - A selector can refer to a: classname, id, keyframe name, function name, mixin name, variable name, etc.
