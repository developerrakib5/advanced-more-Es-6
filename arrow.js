
// Function Declaration
function add (a, b){
    const result = a + b;
    return result;
}
const sum = add(5, 90);
console.log(sum);

// Function Expression
const add2 = function (a, b){
    return a + b;
}
const sum1 = add(10,5);
console.log(sum1);


// Arrow Function
const add3 = (a,b) =>  a + b;
const sum2 = add3(5,2);
console.log(sum2);