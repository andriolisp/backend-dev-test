# Dev Test

We're excited that you want to join the ultimate.ai team.

This is a fairly simple task so we are looking for a demonstration of best software development practices. Show us that
you can work as a part of a team by delivering clean, dry and well commented code that is easy to read, understand and
maintain. Submit your solution as a link to a GitHub repository.

Please don't hesitate to ask if you have any questions regarding this task

## Your Challenge

Your task is to create a Javascript (ES6) or Typescript class which implements state management for a troubleshooting
chat bot. A basic operating principle is that the chat bot starts the conversation by asking a question about the user's
problem and presents pre-defined options for the user to choose from. When the user chooses one of the presented
options, the chat bot asks a new question with new options to find out more about the visitors problem. This
conversation continues until an end stateis reached. An end state is a state without answer options.

The class must have two methods: constructor for loading the conversation structure from the JSON file and
`Conversation.reply(userAnswer)` for updating the internal state and returning the next state question and answer
options based on the user’s message given as an input parameter. Class instance needs to keep track of the state of the
conversation and should start from the beginning of the data structure (first state) when `reply()` method receives an
empty string as the input parameter, when the instance’s internal state is empty or after an end state has been reached.

An example troubleshooting tree is given as a JSON document (troubleshooting.js). Document is a list of states which
have ID, chat bot’s question and a list of answer options. Each answer option has the answer text and an ID of the next
state. When `reply()` method receives one of the answer texts as a parameter, the class instance returns the state which
has the nextState ID of the selected answer option. Conversation between the chat bot and the user progresses as a
consecutive calls to `reply()` method. Come up with a solution for a case when the user’s message is none of the given
answer options.

Write comprehensive unit tests for the class with a popular test framework such as Mocha.

An example conversation from the class instance’s perspective:

```javascript
let conv = new Conversation('./troubleshooting.json');
conv.reply(''); // Returns start state
conv.reply("My phone doesn't work"); // Returns phoneModel state
conv.reply('Samsung Galaxy S10'); // Returns samsungServiceEnd state
```

## Requirements

- Use Typescript or ES6 version of Javascript
- Class for state management of a troubleshooting chat bot
- Solution for a case when user’s answer is none of the answer options
- Comprehensive unit tests with some popular testing framework such as Mocha
- Documentation on the requirements, how to install dependencies and how to run the tests

# Test description and requirements

## Description

The application was develop on Typescript and ES6, and for an easy use a Dockerfile and script was created.

- Use Typescript or ES6 version of Javascript **(DONE)**
- Class for state management of a troubleshooting chat bot **(DONE)**
  - src/conversation.ts
- Solution for a case when user’s answer is none of the answer options **(DONE)**
  - The application will return the same text with the following prefix.
    - _Sorry, I don't have an answer for that yet._
- Comprehensive unit tests with some popular testing framework such as Mocha **(DONE)**
  - The unit tests was done using mocha and chai. They can be executed using the command _yarn test_
  - The unit tests can be found on _src/conversation.test.ts_
- Documentation on the requirements, how to install dependencies and how to run the tests **(DONE)**
  - The documentation is bellow.

## Requirements

- node version >= 11.10 (used to develop v13.12.0)
- yarn 0.27.5
- docker 18.09.2

## Install depedencies

```bash
yarn
```

## Run unit tests

```bash
yarn test
```

## Run Local

```bash
yarn start
```

## Run typescropt in watch mode

```bash
yarn run watch
```

## Run in docker mode

```bash
yarn run docker-start
```
