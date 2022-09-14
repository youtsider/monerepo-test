'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// import { thinking } from "chatter-bot-brains";
async function ask(question) {
    const tone = new RegExp("[!?!？]");
    return question.replace(tone, "").replace("吗", ``);
}

exports.ask = ask;
