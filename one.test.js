// import {capitalize} from "./one.js";

function capitalize(word){
    const firstLetter = word.charAt(0);
    const remainingLetters = word.substring(1);
    const firstLetterCap = firstLetter.toUpperCase();
    const firstLetterCapitalizedWord = firstLetterCap + remainingLetters;
    return firstLetterCapitalizedWord;
}

test('capitalizing', () => {
    expect(capitalize('capitalizing')).toMatch(/Capitalizing/);
});

function reverseString(word){
    let length = word.length;
    let revesed_word = "";
    for(let i = length-1; i>=0; i--){
        revesed_word = revesed_word + word.charAt(i);
    }
    return revesed_word;
}

test('reversed word', () => {
    expect(reverseString('reversed word')).toMatch(/drow desrever/);
});