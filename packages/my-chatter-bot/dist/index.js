'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

async function ask(question) {
    const tone = new RegExp("[!?!？]");
    if (question === "你好？")
        return "你好！";
    return question.replace(tone, "").replace("吗", ``);
}

exports.ask = ask;
