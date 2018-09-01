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

let wordsList = ["pizza", "coffee", "lunch", "dinner", "loan", "gig"];
let wordsListSize = wordsList.length;
let word = document.getElementById("item");

let currPos = 0;
let nextPos = 0;

let initialTimeout = 1500;
let maxTimeout = wordsListSize * initialTimeout;
let sliceTimeout = (maxTimeout / wordsListSize);
let intervalTime = maxTimeout + sliceTimeout;

function setWord() {
    word.innerHTML = "thing";
}

setWord();  // Initialize

function flipWord() {

    while (sliceTimeout <= maxTimeout) {
        setTimeout(function () {
            if (currPos <= wordsListSize) {                
                word.innerHTML = wordsList[currPos];
                nextPos = ++currPos;
            }
        }, sliceTimeout);

        sliceTimeout += initialTimeout;
    }

    if (nextPos >= wordsListSize) {
        currPos = 0;
        sliceTimeout = (maxTimeout / wordsListSize);
    }
}

// Call Animation
flipWord();

// Animate Every X Seconds ($intervalTime)  
setInterval(flipWord, intervalTime); 


