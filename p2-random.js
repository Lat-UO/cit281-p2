/*
    CIT 281 Project 2
    Name: Logan Thompson
*/

// Returns a random number between min (inclusive) and max (exclusive)


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns a single, random, lowercase letter
function getRandomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0,alphabet.length)];
}

//Returns string of random letters with length given
function getRandomString(minLength, maxLength){
    let lengthOfOutputString = getRandomInteger(minLength, maxLength);
    let result = "";
    for (let i = 0; i < lengthOfOutputString; i++) {
        result += getRandomLetter();
    }
return result;
}

//returns string in accending alphabetical order
function getSortedString(string){
    return string.split('').sort().join('');
}

console.log(getSortedString(getRandomString(10, 20)));