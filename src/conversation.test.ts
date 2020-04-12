import Conversation from './conversation';
import { expect } from 'chai';
import 'mocha';

describe('Conversation', () => {
  it('Empty file path', () => {
    expect(() => new Conversation('')).to.throw(Error, 'File parameter is mandatory');
  });
  it('File should exists', () => {
    expect(() => new Conversation('test')).to.throw(Error, 'File does not exists');
  });
  it('Empty Flow on File', () => {
    expect(() => new Conversation('../data/empty_flow.json')).to.throw(Error, 'Flow is empty');
  });
  it('Flow without Start state', () => {
    expect(() => new Conversation('../data/flow_no_start.json')).to.throw(Error, 'Flow does not have start state.');
  });
  it('Conversation', () => {
    const conversation = new Conversation('../data/troubleshooting.json');
    expect(conversation).not.to.be.null;
  });
  it('Start Conversation', () => {
    const conversation = new Conversation('../data/troubleshooting.json');
    expect(conversation).not.to.be.null;

    const answer = conversation.reply('');
    expect(answer).not.to.be.undefined;
    expect(answer.id).to.be.eq('start');
    expect(answer.question).to.be.eq('What kind of problem are you facing?');
  });
  it('Answer not exists', () => {
    const conversation = new Conversation('../data/troubleshooting.json');
    expect(conversation).not.to.be.null;

    let answer = conversation.reply('');
    expect(answer).not.to.be.undefined;
    expect(answer.id).to.be.eq('start');
    expect(answer.answerOptions).not.to.be.undefined;
    expect(answer.answerOptions.length).to.be.eq(2);
    expect(answer.question).to.be.eq('What kind of problem are you facing?');

    answer = conversation.reply('We are all in quarantine');
    expect(answer).not.to.be.undefined;
    expect(answer.id).to.be.eq('start');
    expect(answer.answerOptions).not.to.be.undefined;
    expect(answer.answerOptions.length).to.be.eq(2);
    expect(answer.question).to.be.eq(
      "Sorry, I don't have an answer for that yet. What kind of problem are you facing?",
    );
  });
  it('Answer exists', () => {
    const conversation = new Conversation('../data/troubleshooting.json');
    expect(conversation).not.to.be.null;

    let answer = conversation.reply('');
    expect(answer).not.to.be.undefined;
    expect(answer.id).to.be.eq('start');
    expect(answer.question).to.be.eq('What kind of problem are you facing?');
    expect(answer.answerOptions).not.to.be.undefined;
    expect(answer.answerOptions.length).to.be.eq(2);

    answer = conversation.reply("My internet doesn't work");
    expect(answer).not.to.be.undefined;
    expect(answer.id).to.be.eq('routerReset');
    expect(answer.question).to.be.eq('Have you tried resetting your router?');
    expect(answer.answerOptions).not.to.be.undefined;
    expect(answer.answerOptions.length).to.be.eq(2);
  });
  it('Full Chatbot Flow', () => {
    const conversation = new Conversation('../data/troubleshooting.json');
    expect(conversation).not.to.be.null;

    let answer = conversation.reply('');
    expect(answer).not.to.be.undefined;
    expect(answer.id).to.be.eq('start');
    expect(answer.question).to.be.eq('What kind of problem are you facing?');
    expect(answer.answerOptions).not.to.be.undefined;
    expect(answer.answerOptions.length).to.be.eq(2);

    answer = conversation.reply("My internet doesn't work");
    expect(answer).not.to.be.undefined;
    expect(answer.id).to.be.eq('routerReset');
    expect(answer.question).to.be.eq('Have you tried resetting your router?');
    expect(answer.answerOptions).not.to.be.undefined;
    expect(answer.answerOptions.length).to.be.eq(2);

    answer = conversation.reply('No');
    expect(answer).not.to.be.undefined;
    expect(answer.id).to.be.eq('resetRouterEnd');
    expect(answer.question).to.be.eq('Please try resetting the router?');
    expect(answer.answerOptions).to.be.undefined;
  });
});
