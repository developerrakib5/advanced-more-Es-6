const difference = (x,y) => x-y;
const multiply = (first, second, third) => (first * second * third);
const getAge = (person) => person.age;
const student = {
    name : 'namta',
    age  : 20,
}
const age = getAge (student);
console.log(age);

// System Number 01; single perameter
const getThird = (numbers) => numbers[1];
const third = getThird ([8,9,10,7]);
console.log(third);

// No Perameter
const getPi = () => Math.PI;
console.log(getPi());

// Large Arrow Function
const doMath = (x,y,z) =>{
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result;
}
const doMathResult = (2,3,4);
console.log(doMathResult);