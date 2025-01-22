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


function caesarCipher(word, digit){
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let encript = "";
    
    for(let i = 0; i<word.length; i++){
        let letter = word.charAt(i); 
        if((/[a-zA-Z]/).test(letter)){                   
            let index = letters.indexOf(letter);
            let new_index = index + digit;
            let new_letter = letters[new_index];
            if(letter === letter.toUpperCase()){
                // console.log(letter);
                new_letter = new_letter.toUpperCase();
                // console.log(new_letter);
            }
            encript = encript.concat(new_letter);
        }else{
            encript = encript.concat(letter);
        }
        
    }
    return encript;
}

test('xyz', () => {
    expect(caesarCipher('xyz',3)).toMatch(/abc/);
});

// test('heLLo', () => {
//     expect(caesarCipher('heLLo',3)).toMatch(/khOOr/);
// });

// test('Hello, World!', () => {
//     expect(caesarCipher('Hello, World!',3)).toMatch(/Khoor, Zruog!/);
// });

function analyzeArray(array){
    let get_average = () => {
        const arr_length = array.length;
        let sum = 0;
        for(let i=0; i<arr_length; i++){
            sum = sum + array[i];
        }
        let average = sum/arr_length;

        return average;
    }

    let get_min = () => {
        let min = 1;
        for(let i=0; i<array.length; i++){
            if(array[i]<min){
                min = array[i];
            }
        }
        return min;
    }

    let get_max = () => {
        let max = 1;
        for(let i = 0; i<array.length; i++){
            if(array[i]>max){
                max = array[i];
            }
        }
        return max;
    }

    let get_length = () => {
        return (array.length);
    }

    return {get_average,get_min, get_max, get_length};
}

const object1 = analyzeArray([1,8,3,4,2,6]);

test('average', () => {
    expect(object1.get_average()).toBe(4);
});

test('min', () => {
    expect(object1.get_min()).toBe(1);
});

test('max', () => {
    expect(object1.get_max()).toBe(8);
});

test('length', () => {
    expect(object1.get_length()).toBe(6);
});