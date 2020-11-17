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

/* ------------------------------- */

let lorem = "Lorem Ipsum has been the industry's standard dummy \n"
+ "text ever since the 1500s,\n"
//Es6
let lorem2 = `Esta es la primer linea de texto y ahora voy a pasar
a segunda linea de texto generada para lorem2

ahora pase a la cuarta linea`

console.log(lorem);
console.log(lorem2);

/* ------------------------------- */

let person = {
    'name' : 'Jeyfred',
    'age' : 26,
    'country' : 'COL',

}
console.log(person.name, person.age, person.country);
//Es6
let { name, age, country} = person;
console.log(name, age, country);

/* ------------------------------- */

let team1 = ['Jeyfred' , 'Valeria', 'Juan']

let team2 = ['Oscar', 'Julian', 'Daniela']

// let education = ['David', 'Jeyfred' , 'Valeria', 'Juan' , 'Oscar', 'Julian', 'Daniela']
//Es6
let education = ['David', ...team1, ...team2]

console.log(education)

/* ------------------------------- */

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

/* ------------------------------- */

const a = "hello world";
const a = 123456;
const a = "hello world123456";

console.log(a);