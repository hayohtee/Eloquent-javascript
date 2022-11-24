"use strict";

function reverseArray(array) {
    let newArray = [];

    for (let element of array) {
        newArray.unshift(element);
    }

    return newArray;
}

function reverseArrayInPlace(array) {
    let start  = 0;
    let end = array.length - 1;

    while (start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        
        start++;
        end--;
    }

}
