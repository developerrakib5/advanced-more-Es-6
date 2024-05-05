function add(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
add(10,20);

// Javascript Default Value Added
function add1(num1, num2=2){
    const result1 = num1 + num2;
    console.log(num1, num2, result1);
    return result1;
}
add1(10)

// Javascript Empty Value
function fullName (first, last= ''){
   const full = first + '' + last;
   return full;
}

// Javascript Empty Array
function friends (numbs = []){

}

