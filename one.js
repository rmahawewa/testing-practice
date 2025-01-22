export function capitalize(word){
    const firstLetter = word.charAt(0);
    const remainingLetters = word.substring(1);
    const firstLetterCap = firstLetter.toUpperCase();
    const firstLetterCapitalizedWord = firstLetterCap + remainingLetters;
    return firstLetterCapitalizedWord;
}