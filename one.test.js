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


function calculator(){
    let add = (number1, number2) => {
        return (number1+number2);
    }
    let subtract = (number1, number2) => {
        return (number1-number2);
    }
    let divide = (number1, number2) => {
        return (number1/number2);
    }
    let multiply = (number1, number2) => {
        return (number1*number2);
    }
    return {add, subtract, divide, multiply};
}

let calculator1 = calculator();

test('adds 10 + 20 to equal 30', () => {
    expect(calculator1.add(10,20)).toBe(30);
});

test('subtracts 20-10 to equal 10', () => {
    expect(calculator1.subtract(20,10)).toBe(10);
});

test('devides 30/10 to equal 3', () => {
    expect(calculator1.divide(30,10)).toBe(3);
});

test('multiply 10*20 to equal 200', () => {
    expect(calculator1.multiply(10,20)).toBe(200);
});

