import Conversation from "./conversation";
import { expect } from "chai";
import "mocha";

describe("Conversation", () => {
  it("File should exists", () => {
    const conversation = new Conversation("test");
    expect(conversation).not.to.be.null;
  });
  it("Conversation", () => {
    const conversation = new Conversation("test");
    expect(conversation).not.to.be.null;
  });
  it("Start Conversation", () => {
    const conversation = new Conversation("test");
    expect(conversation).not.to.be.null;

    const answer = conversation.reply("");
    expect(answer).to.be.eq("What kind of problem are you facing?");
  });
  it("Answer not exists", () => {
    const conversation = new Conversation("test");
    expect(conversation).not.to.be.null;

    let answer = conversation.reply("");
    expect(answer).to.be.eq("What kind of problem are you facing?");

    answer = conversation.reply("We are all in quarantine");
    expect(answer).to.be.eq("I'm sorry I don't have answer for that yet");
  });
  it("Answer exists", () => {
    const conversation = new Conversation("test");
    expect(conversation).not.to.be.null;

    let answer = conversation.reply("");
    expect(answer).to.be.eq("What kind of problem are you facing?");

    answer = conversation.reply("My internet doesn't work");
    expect(answer).to.be.eq("Have you tried resetting your router?");
  });
  it("Full Chatbot Flow", () => {
    const conversation = new Conversation("test");
    expect(conversation).not.to.be.null;

    let answer = conversation.reply("");
    expect(answer).to.be.eq("What kind of problem are you facing?");

    answer = conversation.reply("My internet doesn't work");
    expect(answer).to.be.eq("Have you tried resetting your router?");

    answer = conversation.reply("No");
    expect(answer).to.be.empty;
  });
});
