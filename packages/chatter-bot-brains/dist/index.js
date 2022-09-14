'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

async function thinking() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });
}

exports.thinking = thinking;
