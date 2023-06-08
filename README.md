# Welcome to Playwright-TS 🚀 : Your Guide to Effective Testing with Playwright and TypeScript.

<p align="left">
  <a href="https://github.com/ParthibanRajasekaran/Playwright-ts/actions">
    <img alt="Tests Execution Status" src="https://github.com/ParthibanRajasekaran/Playwright-ts/workflows/Playwright Tests/badge.svg" />
  </a>
  <br />
</p>

## Table of Contents

- [Project Overview 📝](#project-overview)
- [Preparing for Takeoff 🚀](#preparing-for-takeoff)
- [IDE Installation 💻](#ide-installation)
- [First Steps 👣](#first-steps)
- [Verify Your Playwright Installation ✅](#verify-your-playwright-installation)
- [Running Tests 🧪](#running-tests)
- [Crafting Tests 🛠️](#crafting-tests)
- [Visual Tests 👁️🔍](#visual-tests)
- [License 📄](#license)
- [Further Reading 📚](#further-reading)

## Project Overview

Welcome to the Playwright-TS project! This robust testing framework is designed to simplify the process of creating, managing, and running your end-to-end (E2E) tests for web applications.

Built using the popular JavaScript testing library [Playwright](https://playwright.dev/) and the powerful [TypeScript](https://www.typescriptlang.org/) language, this project serves as a powerful tool for developers seeking a streamlined and intuitive testing environment. Whether you're implementing a handful of basic tests or managing a suite of complex testing scenarios, Playwright-TS has you covered.

In this repository, you'll find example tests and configurations, as well as detailed instructions on how to create your own. With its focus on ease of use, readability, and efficiency, the Playwright-TS project aims to empower developers to deliver high-quality, bug-free web applications.

Whether you're a seasoned developer or just getting started with testing, Playwright-TS is a versatile tool to add to your development toolkit. Enjoy exploring and happy testing!

For additional details, don't forget to check out the official [Playwright documentation](https://playwright.dev/docs/intro), or discover their latest features [here](https://playwright.dev/docs/whats-new).

## Preparing for Takeoff

Before getting started, ensure you have the following dependencies installed for the best user experience:

- [Node.js](https://nodejs.org) - Version 16 or higher
- [npm](https://www.npmjs.com) - Version 8 or higher

Please note that installing Node.js will also automatically install npm.

To check if Node.js and npm are installed, open a terminal and run the following commands:

```bash
node --version
npm --version
```

Once Node.js and npm are installed, open a terminal or command prompt.

To install TypeScript globally, run the following command:

```bash
npm install -g typescript
```

After the installation is complete, you can verify the TypeScript version by running the following command:

```bash
tsc --version
```

Note: The -g flag in the installation command ensures that TypeScript is installed globally, making it accessible from any location on your system. If you prefer to install it locally in a specific project, omit the -g flag and run the installation command within the project directory.

That's it! You have now installed TypeScript and checked its version on your system.

## IDE Installation

- [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/WebStorm_Icon.svg/1024px-WebStorm_Icon.svg.png" alt="WebStorm" width="20" height="20"> WebStorm](https://www.jetbrains.com/webstorm/): Install the WebStorm IDE for a powerful development experience.
  <br> OR <br>
- [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code" width="20" height="20"> Visual Studio Code](https://code.visualstudio.com): Alternatively, you can use Visual Studio Code, a popular lightweight code editor.

## First Steps

1. Clone the repository: `git clone https://github.com/YourUsername/playwright-ts.git`
2. Open the project in your favorite editor.
3. Launch a Terminal in your editor (usually found in the bottom right corner).
4. Install necessary dependencies by running:

```bash
npm install --save-dev
```

## Verify Your Playwright Installation

Run a simple test to verify your Playwright installation:

```bash
npm run test:chrome
```

If everything is set up correctly, you should see the test running and passing in the console.

## Running Tests

To run the tests via CLI on a headless mode, use one of the following commands based on the browser you want to test:

```bash
npm run test:chrome
npm run test:firefox
npm run test:safari
```

## Crafting Tests

Create page classes in the page-objects directory and add methods representing the actions you can perform on the page. Create a new test file in the e2e folder and use the page objects to define your tests. Please use the naming convention \*.spec.ts for test classes.

## Visual Tests

To run the visual tests in the project:

```shell
npx playwright test --config=visual.config.ts
```
To run the visual tests in Safari browser:
```shell
npx playwright test --config=visual.config.ts --project=webkit
```
To update screenshots in the inventory and then trigger the tests:
```shell
npx playwright test --config=visual.config.ts --project=webkit --update-snapshots
```
By default, the tests will use the Chromium browser. You can specify a different browser using the --project flag with the value chromium, firefox, or webkit.

### Configuration
The visual tests are configured using the visual.config.ts file. You can modify this file to customize the test configuration, such as the test suites, browsers, and viewport sizes.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for more details.

## Further Reading

[Playwright Documentation](https://playwright.dev/docs/intro)
