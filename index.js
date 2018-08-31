/*************************************************************************
 *  A program written in JavaScript to animate flipping a word on an HTML 
 *  page. 
 *  
 *  Date:   August 31, 2018
 *  Author: Kenol David, Jr.
 *  
 *  This version is more for intermediate/advanced level programmers. 
 *  
 *************************************************************************/
"use strict";

let wordsList = ["pizza", "coffee", "lunch", "dinner", "loan", "product"];
let wordsListSize = wordsList.length;
let word = document.getElementById("item");

let currPos = 0;
let nextPos = 0;

let initialTimeout = 1000;
let maxTimeout = wordsListSize * initialTimeout;
let sliceTimeout = (maxTimeout / wordsListSize);
let intervalTime = maxTimeout + sliceTimeout;

function setWord() {
    word.innerHTML = wordsList[currPos];
}

setWord();  // Initialize

function flipWord() {
    do {
        sliceTimeout += initialTimeout;

        setTimeout(function () {
            if (currPos <= wordsListSize) {
                setWord();
                nextPos = ++currPos;
            }
        }, sliceTimeout);

    } while (sliceTimeout <= maxTimeout);

    if (nextPos >= wordsListSize) {
        currPos = 0;
    }
}

flipWord(); // Call Animation

setInterval(flipWord, intervalTime);    // Animate Every X Seconds ($intervalTime)  
