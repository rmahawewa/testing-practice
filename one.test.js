const modules = require('./one');
const capitalize = modules.capitalize;
const reverseString = modules.reverseString;
const calculator = modules.calculator;
const caesarCipher = modules.caesarCipher;
const analyzeArray = modules.analyzeArray;



test('capitalizing', () => {
    expect(capitalize('capitalizing')).toMatch(/Capitalizing/);
});



test('reversed word', () => {
    expect(reverseString('reversed word')).toMatch(/drow desrever/);
});



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



test('xyz', () => {
    expect(caesarCipher('xyz',3)).toMatch(/abc/);
});

// test('heLLo', () => {
//     expect(caesarCipher('heLLo',3)).toMatch(/khOOr/);
// });

// test('Hello, World!', () => {
//     expect(caesarCipher('Hello, World!',3)).toMatch(/Khoor, Zruog!/);
// });



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