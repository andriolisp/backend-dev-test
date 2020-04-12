import fs from 'fs';
import path from 'path';

import Flow from './model/flow';

/**
 * Conversation manage all the conversation flow.
 */
export default class Conversation {
  /**
   * MapFlow will store all the flows
   */
  private mapFlow: Map<string, Flow>;

  /**
   * currentState will store the current state of the conversation
   */
  private currentState: Flow;

  /**
   * Creates an instance of conversation, checking if the file exists, contains a Flow array
   * and contains a "start" flow.
   * Time Complexity - O(N)
   * @param file has the JSON file containing the @class Flow array
   */
  constructor(file: string) {
    try {
      // CHeck if the file parameter is valid.
      if (!file) throw new Error('File parameter is mandatory');

      // Check if the file exists.
      const filePath = path.join(__dirname, file);
      if (!fs.existsSync(filePath)) throw new Error('File does not exists');

      // Load the file and check if has an array.
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const list: Flow[] = require(filePath);
      if (list.length === 0) throw new Error('Flow is empty');

      // Load the list of Flow in the Map with the id of the flow as id.
      this.mapFlow = new Map();
      list.forEach((v) => this.mapFlow.set(v.id, v));

      // Check if the map has the start flow.
      const startState = this.mapFlow.get('start');
      if (!startState) throw new Error('Flow does not have start state.');

      // Set the current state as start.
      this.currentState = startState;
    } catch (ex) {
      throw ex;
    }
  }

  /**
   * Process the response, try to find the correct the answer and update the flow
   * Time Complexity - O(1)
   * @param reply is the answer for the current dlow
   * @returns the next state of the flow or the current state with the exception message.
   */
  reply(reply: string): Flow {
    // Check the reply is empty and return the current state
    if (reply === '') {
      return this.currentState;
    }

    // Try to find the answer on the current flow.
    const answers = this.currentState.answerOptions.filter(
      (v) => reply.trim().toLowerCase() === v.answer.trim().toLowerCase(),
    );
    if (answers.length === 1) {
      // If the answer is found set the next state
      this.currentState = this.mapFlow.get(answers[0].nextState);
    } else {
      // Create a copy of the current state (to not reference the original object) and add the prefix "Sorry, I don't have an answer for that yet." to the currentState
      this.currentState = Object.assign({}, this.mapFlow.get(this.currentState.id));
      this.currentState = Object.assign(this.currentState, {
        question: `Sorry, I don't have an answer for that yet. ${this.currentState.question}`,
      });
    }
    return this.currentState;
  }
}
