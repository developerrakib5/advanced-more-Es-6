const numbers = [1,6,3,8];
// for(let i = 0; i<numbers.length; i++ ){

// }

// While

for (const num of numbers){
    console.log(num);
}
// For Of Looping Javascript
const nobab = 'Nobab Siraj Uddola';
for (const char of nobab){
    // console.log(char);
}

const glass = {
    name : 'glass',
    colour : 'Goldn',
    Price : 12,
    isCleaned : true,
}
// For In Looping Javascript
for (const keys in glass){
    // For Of Loop Value 
    const Value = glass[keys];
    console.log(Value);
    console.log(keys);
}