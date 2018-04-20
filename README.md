# Creating Reusable React Components (Pluralsight) [![Build Status](https://travis-ci.org/Darmaiad/pluralsight-reusable-react-components.svg?branch=master)](https://travis-ci.org/Darmaiad/pluralsight-reusable-react-components)
A library of React components with documentation and examples. The project is based on the [Pluralsight](https://www.pluralsight.com/) course: [Creating Reusable React Components](https://app.pluralsight.com/library/courses/redux-saga/table-of-contents) by [Cory House](https://github.com/coryhouse).

## Installation & Execution
* Assuming you have `npm` & `node.js` installed, you can either clone or download the repository. 
* Navigate to the folder that you/was created. 
* Then, run `npm install` on the command line to download the dependencies. 
* You can execute the application in the following modes: 
  * Run `npm start` to launch to the project in development environment.
  * Run `npm run build:docs` to launch to the project in production environment.
  * Run `npm test` to run the tests.
  
 When launching the project, in either case, you can view the components' documentation. It is also available at this project's webpage, with the predictable URL:  [https://darmaiad.github.io/pluralsight-reusable-react-components/](https://darmaiad.github.io/pluralsight-reusable-react-components/)

## Description
This is a small library of React components. When running the project you can see the rich documentation that is dynamically generated with react-docgen, displaying the source code, the props accepted, examples of use, and more. I developed the project while coding along with the courses' instructor. I did some code refactoring and added comments .

A [CI/CD](https://en.wikipedia.org/wiki/CI/CD) pipeline is set up for this project. Upon push, [Travis-CI](https://travis-ci.org/) will attempt to build the project and if the build is successful, it will be deployed at [Github Pages](https://pages.github.com/).

This project's environment is an ejected and slightly configured version of [Create React App](https://github.com/facebookincubator/create-react-app).
