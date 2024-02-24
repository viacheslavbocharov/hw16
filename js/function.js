'use strict';

function generateKey(length, characters) {

    let arr = [...characters];
    let key = '';

    for (let i = 0; i < length; i++) {
        // let min = 0;
        // let max = (arr.length - 1);
        //key += arr[Math.floor(Math.random() * (max - min + 1) + min)];

        //Shorthand
        key += arr[Math.floor(Math.random() * arr.length)];

    }

    return key;
}
