

const glass = {
    name : 'glass',
    colour : 'Goldn',
    Price : 12,
    isCleaned : true,
}

const Keys = Object.keys(glass) /*Javascript Object Keys */
const Keys1 = Object.values(glass)  /*Javascript Object Values */
const Keys2 = Object.entries(glass)  /*Javascript Object Entries (Array Of Array Two Dimensional Array)*/
delete glass.Price   /*Javascript Object Property Delete System*/ 
console.log(glass);  /*Javascript Object Property Delete System*/
console.log(Keys);
console.log(Keys1);
console.log(Keys2);


// Property Short System
const plet = {
    name : 'plet',
    colour : 'White',
    Price : 120,
    isCleaned : true,
}
const {isCleaned,...shortplet} = plet;
console.log(shortplet);

// Freeze (Amara Aitar Man Kono Vabe Change Korte Dibo Na Remove Korte Dibo Na)
const Jug = {
    name : 'Jug',
    colour : 'Red',
    Price : 12001,
    isCleaned : true,
}
Object.freeze(Jug);
Jug.source = 'Bangladesh';
console.log(Jug);