"use strict";

function deepEqual(value1, value2) {
    if (typeof value1 !== "object" && typeof value2 !== "object") {
        return value1 === value2;
    }

    if (value1 == null || value2 == null) {
        return false;
    }

    let keys1 = Object.keys(value1);
    let keys2 = Object.keys(value2);

    if (keys1.length != keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
            return false;
        }
    }

    return true;
}
