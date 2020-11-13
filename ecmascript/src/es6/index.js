function newFunction(name, age, country){
    var name = name || 'jeyfred';
    var age = age || 26;
    var country = country || 'COL';
    console.log(name, age, country)
}

// Es6

function newFunction2(name = 'Jeyfred', age=26, country = 'COL' ){
    console.log(name, age, country);
}

newFunction2();
newFunction2();

/* ------------------------------- */

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// Es6 
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);