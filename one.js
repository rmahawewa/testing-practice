exports.capitalize = (word) => {
    const firstLetter = word.charAt(0);
    const remainingLetters = word.substring(1);
    const firstLetterCap = firstLetter.toUpperCase();
    const firstLetterCapitalizedWord = firstLetterCap + remainingLetters;
    return firstLetterCapitalizedWord;
}

exports.reverseString = (word) => {
    let length = word.length;
    let revesed_word = "";
    for(let i = length-1; i>=0; i--){
        revesed_word = revesed_word + word.charAt(i);
    }
    return revesed_word;
}

exports.calculator = () => {
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

exports.caesarCipher = (word, digit) => {
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

exports.analyzeArray = (array) => {
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