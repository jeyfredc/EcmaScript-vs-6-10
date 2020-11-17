const data = {
    frontend: 'Diana',
    backend: 'Jeyfred',
    design: 'Vanessa',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.lenght);

/* ************************ */

const data = {
    frontend: 'Diana',
    backend: 'Jeyfred',
    design: 'Vanessa',
}

const values = Object.values(data);
console.log(values);

/* ************************ */

const string = 'hello';
// console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));