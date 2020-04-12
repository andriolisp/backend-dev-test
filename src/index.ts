import Conversation from './conversation';
import Flow from './model/flow';
import readline from 'readline';

let conversation = new Conversation('../data/troubleshooting.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const consoleInterface = (flow: Flow) => {
  rl.question(`${flow.question} : `, (userAnswer: string) => {
    let answer: string = userAnswer;
    if (answer === 'quit') return rl.close();
    if (answer === 'restart') {
      conversation = new Conversation('../data/troubleshooting.json');
      answer = '';
    }

    const reply: Flow = conversation.reply(answer);
    if (reply && reply.answerOptions) {
      consoleInterface(reply);
    } else {
      console.log(reply.question);
      rl.close();
    }
  });
};

// eslint-disable-next-line no-console
console.clear();
console.log('========== Welcome to the ultimate.ai test ==============');
console.log('Type "quit" anytime to quit, or "restart" to go to initial state.');

consoleInterface(conversation.reply(''));
