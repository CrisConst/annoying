# Annoying Button Vue Project

This project implements a fun and interactive button using Vue.js. The button moves around when hovered over and asks a series of uncomfortable questions before finally allowing the user to click it. 

## Features

- Moving button that tries to avoid being clicked
- Series of questions before confirming the click
- Confirmation message once the user successfully clicks the button
- Unit tests using Jest and Vue Test Utils

## Project Structure

src/
├── components/
│ └── AnnoyingButton/
│ ├── tests/
│ │ └── AnnoyingButton.spec.js
│ ├── AnnoyingButton.vue
│ └── AnnoyingButton.css
├── App.vue
├── main.js
└── questions.js

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

## Installation
Navigate to the project directory:

cd app

Install the dependencies:

npm install

Running the Development Server

To run the development server, use the following command:

npm run serve

This will start the development server at http://localhost:8080/. Open this URL in your browser to see the application in action.

Running the Tests
To run the unit tests, use the following command:

npm run test:unit

This will execute the unit tests using Jest and Vue Test Utils.

## Project configuration

Jest Configuration
Ensure you have the Jest configuration in jest.config.js:

module.exports = {
  preset: '@vue/cli-plugin-unit-jest'
}

Scripts in package.json

Ensure your package.json includes the necessary scripts:

{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test:unit": "vue-cli-service test:unit"
  }
}

## Component details

AnnoyingButton.vue
This component includes the main functionality of the moving button and the questions logic.

AnnoyingButton.css
This file includes the styles for the AnnoyingButton component.

AnnoyingButton.spec.js
This file includes the unit tests for the AnnoyingButton component.

Questions
The questions.js file contains the list of questions asked before confirming the click.

export const questions = [
  "Are you sure you want to click?",
  "Really sure?",
  "Are you absolutely certain?",
  "Won't you regret this?",
  "Last chance to change your mind!"
];