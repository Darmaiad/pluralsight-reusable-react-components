# Creating Reusable React Components (Pluralsight) [![Build Status](https://travis-ci.org/Darmaiad/pluralsight-reusable-react-components.svg?branch=master)](https://travis-ci.org/Darmaiad/pluralsight-reusable-react-components) [![https://ci.appveyor.com/api/projects/status/github/Darmaiad/pluralsight-reusable-react-components?branch=master&svg=true](https://ci.appveyor.com/api/projects/status/github/Darmaiad/pluralsight-reusable-react-components?branch=master&svg=true)](https://ci.appveyor.com/api/projects/status/github/Darmaiad/pluralsight-reusable-react-components?branch=master&svg=true)
A library of React components with documentation and examples. The project is based on the [Pluralsight](https://www.pluralsight.com/) course: [Creating Reusable React Components](https://app.pluralsight.com/library/courses/redux-saga/table-of-contents) by [Cory House](https://github.com/coryhouse).

The documentation can be viewed [here](https://darmaiad.github.io/pluralsight-reusable-react-components/). The components are also published on `npm`. They can be downloaded by running `npm i pluralsight-reusable-react-components`.

## Installation & Execution
To view or tinker with the source code you can do the following:
* Assuming you have `npm` & `node.js` installed, you can either clone or download the repository. 
* Navigate to the folder that you/was created. 
* Then, run `npm install` on the command line to download the dependencies. 
* You can execute the application in the following modes: 
  * Run `npm start` to launch to the project in development environment.
  * Run `npm run build:docs` to launch to the project in production environment.
  * Run `npm test` to run the tests.
  
## Description
This is a small library of React components. When running the project you can see the rich documentation that is dynamically generated with react-docgen, displaying the source code, the props accepted, examples of use, and more. I developed the project while coding along with the courses' instructor. I did some code refactoring and added comments .

A [CI/CD](https://en.wikipedia.org/wiki/CI/CD) pipeline is set up for this project. Upon push, [Travis-CI](https://travis-ci.org/) will attempt to build the project and if the build is successful, it will be deployed at [Github Pages](https://pages.github.com/). A second [CI](https://en.wikipedia.org/wiki/Continuous_integration) server, [AppVeyor](https://ci.appveyor.com), was added to test the project in a Windows environment.

This project's environment is an ejected and slightly configured version of [Create React App](https://github.com/facebookincubator/create-react-app).
