"use strict";

function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

// output 1-10 on newlines
loop(1, (i) => (i <= 10), (i) => i += 1, console.log);