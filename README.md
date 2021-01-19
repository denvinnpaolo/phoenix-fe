# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



## Project Overview

[Trello Board](https://trello.com/b/zz5Wfn0A/project-phoenix)


Organize all the things about life that are irregular. The things you forget to do.
Change your oil, rotate your tires, replace your AC air filter. Home, auto, other maintenance tasks.
Log events, later searchable so you can remember when/where/what you did.

### Key Features

- Sign up as a Waste Producer(Hotel, Restaurant, Business, etc)
- Post available waste for pick up(free/charge)
- Waste Producer can edit posts
- Waste Producer can delete posts
- Waste Producer can keep track of completed and canceled posts
- Waste Producer can archive posts

- Sign up as a Waste Transformer(Waste Management, Recycling center, etc)
- Waste Transformer can view ALL available wastes and their expiration
- Waste Transformer can set up a pick up
- Waste Transformer can complete a pick up
- Waste Transformer can cancel a pick up

Both Users have access to a calendar and soon a map.


## Front End Tech Stack

    - React, using `create-react-app` as a framework.
    - Redux for state management.
    - Theme UI and bootstrap for styling

#### Website deployed on www.smarttrax.us



## Installation Instructions

Clone this project and run `npm install` at the root of this project in your terminal.

Run `npm run startDev` to spin up a local development server. The `start` script in the `package.json` is for Heroku to properly build the app.

## Testing

This app uses [React testing library](https://testing-library.com/docs/react-testing-library/intro). To run your tests, use the command `npm test`. Use the command `npm test -- --coverage --watchAll=false` to run a test coverage report.

A more user-friendly way to read the test coverage report is to navigate to `coverage/lcov-report/index.html` and open that html file in your browser. Then you can click through the different folders and files to see highlights of parts of your code that might still be missing tests.

### Adding more tests

All test files can be found within a `__tests__` folder within the directory the original file is located. For example, for the file `src/components/dashboard/Dashboard.js`, the `Dashboard.test.js` file is located at `src/components/dashboard/__tests__/Dasboard.test.js`.

Any component that accesses any styling from the `theme` must be wrapped in a `ThemeProvider`. A utility function was created specifically for tests in `tests/themeProviderTestsUtil.js`. In a test file where you would normally import `render` from `@testing-library/react` import it from this utility function instead. For your convenience, in any file where you are importing from this utility function, you can also import any method available from `@testing-library/react` as they've all been re-exported in that file. `render` takes the following parameters:

- `ui` -- \*\*required, the component you want to test
- renderOptions (an object) -- \*\*optional, you can pass in a mock Context store or initial state here

For any component that needs to be wrapped in a `Router`, a utility function was created at `tests/routerTestsUtil.js`. In a test file where you would normally import `renderWithRouter` from `@testing-library/react` import it from this utility function instead. `renderWithRouter` takes in the following parameters:

- `Ui` -- \*\*required, the component you want to test
- {path, route, history} -- \*\*optional, `path` and `route` default to `/` and `history` defaults to `createMemoryHistory({ initialEntries: [route] })` (`createMemoryHistory` is imported from `history`)
- renderOptions (an object) -- \*\*optional, you can pass in a mock Context store or initial state here

## Environment Variables

Create a `.env.development` and `.env.production` file so you don't have to hard code any environment variables anywhere. Below is a list of environment variable names you will need:

    - `BASE_HOST` -- the base URL for the backend server
        - for development using your local server, set this to `http://localhost:5000` or whatever port your local backend runs on
        - for production, set this to the deployed URL of the backend server

## Styling

This project uses [Theme UI](https://theme-ui.com/getting-started) and [Bootstrap], 

In any component where you want to have any styling from the `theme` file needs to have the following imported at the very top of the file (including the comment):

```js
/** @jsx jsx */
import { jsx } from 'theme-ui';
```

Import any Theme UI components from `@theme-ui/components`. For example:

```js
import { Card } from '@theme-ui/components';
```

A list of available components can be found in the Theme UI docs. To override any of the default styling for your own theme, you must [create a variant](https://theme-ui.com/components/variants) inside of your `theme` file.

For example, according to the docs, the `Card` component is found in the `cards` variant group. This means that within your `theme` object, you can create a `cards` key, whose value is an object. Within that `cards` object, the default "variant" for a `Card` is called `primary`. In order to override Theme UI's default stylings for that basic, default `Card`, you must create a `primary` key inside of your `cards` object and provide your stylings there.

See the [official docs](https://theme-ui.com/getting-started/) or a [write-up by Janessa Garrow](https://janessagarrow.com/blog/2020-07-14-intro-to-theme-ui/) on some of the basics of Theme UI.

This project also uses [Framer Motion](https://www.framer.com/api/motion/) for some animations, particularly for sliding the task cards in the mobile view. The docs are a great place to go. This [Egghead video compilation](https://egghead.io/playlists/animating-react-components-with-framer-motion-acecb152) is a nice intro, as well.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).