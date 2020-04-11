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
conv.reply('');  // Returns start state
conv.reply('My phone doesn\'t work');  // Returns phoneModel state
conv.reply('Samsung Galaxy S10');  // Returns samsungServiceEnd state
```

## Requirements
- Use Typescript or ES6 version of Javascript
- Class for state management of a troubleshooting chat bot
- Solution for a case when user’s answer is none of the answer options
- Comprehensive unit tests with some popular testing framework such as Mocha
- Documentation on the requirements, how to install dependencies and how to run the tests
