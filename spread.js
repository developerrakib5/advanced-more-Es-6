// ! System Number 1
const max = Math.max(10,9,8,7,12,89);
console.log(max);

// ! System Number 2
const numbers = [2,5,8,9,7,31,25,87];
// console.log(...numbers);
const mathMax = Math.max(...numbers);
console.log(mathMax);

// ! Use Spread Operator To Copy
const friends = [4,5,87,9];
const bondhu = friends;
// nums2.push(12);
// console.log(nums2);
// console.log(nums);
const dosto = friends;
console.log(...dosto);
friends.push(100);
console.log(friends);
console.log(dosto);

