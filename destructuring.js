// ! What is Destructuring?
// => Destructuring mane kono akta object ba array theke kono akta man ke easily niye asha 


const actor = {
    name : 'Anamta',
    age  : 30,
    phone : '01741478752',
    money : 1920
};
// Destructuring Formula 
const {name,age,money:taka} = actor 
console.log(name);
console.log(age);
console.log(taka);


// console.log(actor.phone)
// const phoneNumber = actor.phone;
// console.log(phoneNumber);
// console.log(phoneNumber);
// console.log(phoneNumber);
// console.log(phoneNumber);

// ! Array Destructuring
const numberr = [45,99];
const [first, second] = numberr;
console.log([first,second]);

// 
function doubleThem(a,b){
    return[a*2,b*2];
} 
const [prothom,ditiyo] = doubleThem(6,9);
console.log(prothom,ditiyo);