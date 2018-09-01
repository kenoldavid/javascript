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
console.log("wordsListSize: " + wordsListSize)
let word = document.getElementById("item");

let currPos = 0;
let nextPos = 0;

let initialTimeout = 1500;

let maxTimeout = wordsListSize * initialTimeout;
console.log("Max Timeout: " + maxTimeout)

let sliceTimeout = (maxTimeout / wordsListSize);
console.log("Initial sliceTimeout: " + sliceTimeout)

let intervalTime = maxTimeout + sliceTimeout;
console.log("Initial intervalTime: " + intervalTime)

function setWord() {
    word.innerHTML = "thing";
}

setWord();  // Initialize

function flipWord() {

    while (sliceTimeout <= maxTimeout) {
        setTimeout(function () {
            if (currPos <= wordsListSize) {
                console.log("currPos: " + currPos)                
                word.innerHTML = wordsList[currPos];
                nextPos = ++currPos;
                console.log("Next nextPos: " + nextPos)
            }
        }, sliceTimeout);

        sliceTimeout += initialTimeout;
        console.log("Next sliceTimeout: " + sliceTimeout)
    }

    if (nextPos >= wordsListSize) {
        currPos = 0;
        console.log("(if) Max Timeout: " + maxTimeout)
        sliceTimeout = (maxTimeout / wordsListSize);
        console.log("(if) sliceTimeout: " + sliceTimeout)
    }
}

// Call Animation
flipWord();

// Animate Every X Seconds ($intervalTime)  
setInterval(flipWord, intervalTime); 


