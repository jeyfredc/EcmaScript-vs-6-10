const obj = {
    name : 'Jeyfred',
    age: 26,
    country: 'COL',
};

/* let { name, ...all } = obj;
console.log(name, all); */

let { country, ...all} = obj;
console.log(all);

/* ***************** */

const obj = {
    name: 'Jeyfred',
    age: 26,
}

const obj1 = {
    ...obj,
    country: 'COL',
}

console.log(obj1);

/* ***************** */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        /* ? resolve('Hello World') */
        ? setTimeout(() => resolve('Hello World'), 5000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));

/* ***************** */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-11-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);