# ES6+

## Tabla de contenido

[Default Params y Concatenación](#Default-Params-y-Concatenación)

[LET y CONST, Multilínea, Spread Operator y Desestructuración](#LET-y-CONST-Multilínea-Spread-Operator-y-Desestructuración)

[Arrow Functions, Promesas y Parámetros en objetos](Arrow-Functions-Promesas-y-Parámetros-en-objetos)

[Clases, Módulos y Generadores](#Clases-Módulos-y-Generadores)

[¿Qué se implementó en ES7?](#¿Qué-se-implementó-en-ES7)

[¿Qué se implementó en ES8?](#¿Qué-se-implementó-en-ES8)

[Async Await](#Async-Await)

[¿Qué se implementó en ES9?](#¿Qué-se-implementó-en-ES9)

[¿Qué se implementó en ES10?](#¿Qué-se-implementó-en-ES10)

Entender que modificaciones se han realizado en cada una de las versiones de la especificacion de Ecma Script la cual pertenece a estandares que ha desarrollado Ecma International, la cual es una institucion encargada de los estandares. JavaScript es el lenguaje de programacion que utiliza la especificacion Ecma Script para trabajar sobre las caracteristicas que van siendo añadidas año con año a partir del 2015 que fue lanzada la version 6, despues de que lanzaron la version 6 empezo a salir ES7, ES8, ES9, etc.

**Nota:** cada version lanza nuevas caracteristicas y generalmente es lanzada en el mes de junio año tras año 

## Default Params y Concatenación

Lo primero a realizar es abrir la consola o terminal y crear una carpeta que se llame ecmacript ya sea con el comando mkdir ecmascript o creandola directamente en el editor de codigo **VsCode**

luego ubicar la carpeta en la terminal, ejecutar el comando `git init` y despues el comando `npm init` y luego ejecutar todo como esta en la siguiente imagen

![assets/1.png](assets/1.png)

luego dentro de la carpeta **ecmascript** crear una carpeta que se llame **src** y dentro de esta crear otra carpeta que se llame **es6** y dentro de esta crear un archivo que se llame **index.js**

Una de las caracteristicas añadidas a Es6 son los **parametros por defecto**, lo que significa es que se pueden establecer valores que se pasan a una funcion por defecto 

A continuacion un ejemplo de como se hacia antes de que existiera Es6

se creaba la funcion asignando parametros como nombre, edad y pais y luego con var y el nombre de la variable se empezaban a establecer los parametros

```
function newFunction(name, age, country){
    var name = name || 'jeyfred';
    var age = age || 26;
    var country = country || 'COL';
    console.log(name, age, country)
}
```

Con el nuevo estandar ahora se puede establecer desde la asignacion de los parametros 

```
// Es6

function newFunction2(name = 'Jeyfred', age=26, country = 'COL' ){
    console.log(name, age, country);
}
```

para hacer el llamado de la funcion se podria hacer de 2 formas.

La primera es simplemente con 

`newFunction2();`

De esta forma va a traer los datos que se pasaron en los parametros de la funcion

La otra forma es pasando otro tipo de valor por parametros

`newFunction2('Oscar', '32', 'MEX');`

para poder ejecutar sin necesidad de usar el navegador con **ctrl+shift+x** se puede utilizar las extensiones de **VsCode** y en el buscador buscar **Code Runner**

![assets/2.png](assets/2.png)

lo que se debe hacer a continuacion es seleccionar el bloque de codigo que se quiere ejecutar, dar click derecho y luego seleccionar **Run Code**

![assets/3.png](assets/3.png)

A continuacion lo que va a pasar es que se va a abrir una terminal en **VsCode** ejecutando el codigo

![assets/4.png](assets/4.png)

___

**Templates literals**

Permiten separar o unir varios elementos

primero se va a realizar el ejemplo con el estandar antiguo, se declaraban variables con string y para poder concatenar se utilizaba el simbolo + unas comillas con un espacio y otro + para concatenar palabras

```
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
```

De esta forma era como anteriormente se concatenaba

![assets/5.png](assets/5.png)

Ahora con los template literal es mucho mas facil concatenar palabras, se le denomina asi a estas comillas **``** francesas generalmente no se encuentran en la misma posicion en todos los teclados y depende en que idioma este configurado el teclado.
despues se utiliza el signo `$` y los corchetes `{}` para pasar las variables dentro de estos. De esta forma

```
// Es6 
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
```

![assets/6.png](assets/6.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## LET y CONST, Multilínea, Spread Operator y Desestructuración

Otra de las cosas que cambia con ES6 es el multilinea es decir escribir palabras a traves de una variable y lo que antiguamente se hacia para hacer un salto de linea era colocar lo siguiente `\n` y luego concatenar con el signo `+` aqui un ejemplo.

```
let lorem = "Lorem Ipsum has been the industry's standard dummy \n"
+ "text ever since the 1500s,\n"
```

Ahora con ES6 se puede hacer uso de los template literals **``** y saltar de linea con dar un enter en el codigo de la siguiente forma

```
//Es6
let lorem2 = `Esta es la primer linea de texto y ahora voy a pasar
a segunda linea de texto generada para lorem2

ahora pase a la cuarta linea`
```

Luego de esto se hace un `console.log` de cada una de las variables

![assets/7.png](assets/7.png)

___

Ahora viene la desestructuración para esto se crea un objeto con una variable que se llame `person` la cual va a tener 3 elementos op atributos que van a ser el nombre, la edad y el pais y luego para acceder a cada uno de los elementos con `console.log` se llama al atributo o propiedad de `person` asi `(person.name, person.age, person.country)`.

```
let person = {
    'name' : 'Jeyfred',
    'age' : 26,
    'country' : 'COL',

}
console.log(person.name, person.age, person.country);
```

Con Es6 se debe crear una constante de esta forma `let { name, age, country} = person;` y luego nuevamentecon console.log llamar a cada uno de los atributos directamete `console.log(name, age, country);` si se quiere quitar algun atributo como age o country se debe eliminar de la constante y de `console.log`

```
//Es6
let { name, age, country} = person;
console.log(name, age, country);
```

![assets/8.png](assets/8.png)

___

El operador de propagacion ayuda a unir elementos como por ejemplo arrays o arreglos. este operador esta representado en el codigo con `...variable`, aqui un ejemplo de como se haria de la forma anterior para unir elementos

```
let team1 = ['Jeyfred' , 'Valeria', 'Juan']

let team2 = ['Oscar', 'Julian', 'Daniela']

let education = ['David', 'Jeyfred' , 'Valeria', 'Juan' , 'Oscar', 'Julian', 'Daniela']

console.log(education)
```

Con Es6 por medio de este llamado se pueden unir los elementos de manera mas simple

```
//Es6
let education = ['David', ...team1, ...team2]

console.log(education)
```

![assets/9.png](assets/9.png)

___

**Nota:** A partir de Es6 ya no se usa la palabra **var** para declarar variables porque al declarar una variable esta estaba disponible de forma global.

Con la palabra **let** solo esta disponible en el Scope, es decir en el bloque de codigo que va a ser llamado

por ejemplo aqui se va a declarar una variable con la palabra var y luego la palabra let

```
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
}

console.log(globalVar);

console.log(globalLet);

```

Al hacer `console.log`, solo esta disponible la palabra Global Var, porque esta en el scope global, pero Global Let no se encuentra disponible porque solo funciona dentro del bloque de codigo

![assets/10.png](assets/10.png)

Para poder imprimir la otra palabra, se debe declarar console.log dentro del bloque asi

```
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

```

![assets/11.png](assets/11.png)

___

Otra de las cosas que cambia Es6 es la asignacion de variables, por ejemplo con la palabra **var** se podia asignar valores cuantas veces quisiera asi y al final imprimir el ultimo valor asignado a una variable

```
var a = "hello world";
var a = 123456;
var a = "hello world123456";

console.log(a);
```

![assets/12.png](assets/12.png)

Ahora con Es6 y la palabra reservada `const` ya no es posible re asignar una variable que este declarada y por tanto se va a imprimir un error

```
var a = "hello world";
var a = 123456;
var a = "hello world123456";

console.log(a);
```

![assets/13.png](assets/13.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Arrow Functions, Promesas y Parámetros en objetos

Anteriormente para crear un objeto se debe acceder a la variable y a la propiedad de esta forma

```
let name = "Jeyfred";
let age = 26;

obj = {name: name , age:age}

console.log(obj)
```

Con Es6 se permite ahorrar un poco mas de codigo para acceder al objeto de la siguiente forma

```
let name = "Jeyfred";
let age = 26;
//Es6
obj2 = {name , age};

console.log(obj2);
```

![assets/14.png](assets/14.png)

___

### Arrow Functions(Funciones de tipo flecha)

Las Arrow Fucntions son funciones anonimas en Es5 se usaban para iterar sobre objetos en un arreglo y poder presentar o obtener los datos para esto se tenia que usar el metodo `Map` y lo que va dentro de los parentesis son las **Arrow Functions** o funciones anonimas

```
let names = [
    { name: 'Jeyfred', age: 26},
    { name: 'Tatiana', age: 23},
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})
```

Con Es6 en vez de pasar directamente la funcion anonima se va a esteblecer el iterador el cual seria `item` y mediante `=>` ya se establece que es una funcion anonima 

```
let names = [
    { name: 'Jeyfred', age: 26},
    { name: 'Tatiana', age: 23},
]

let listOfNames2 = names.map(item => console.log(item.name));
```

y esta seria una tercer forma de obtener los valores

```
let names = [
    { name: 'Jeyfred', age: 26},
    { name: 'Tatiana', age: 23},
]

let listOfNames3 = names.map(({name, age}) => console.log(name, age));
```

![assets/15.png](assets/15.png)

___

### Promises (Promesas)

Con estas se trabaja lo que es el asincronismo, quiere decir que va a ejecutar elemento por elemento y solucionar un problema en los **callback** al cual le llamaba **callback hell**, era ejecutar llamados en cascada y anidacion de muchos elemetos que hacia mas dificil leer el codigo.

Las promesas lo que inidican es que algo va a suceder, segun lo asigne la persona que esta programando, ahora mediante una **arrow function** se establece la promesa, estas utilizan tambien dos metodos que son **resolve** o **reject**, es decir resuelve o rechaza, en el caso de que sea cierto imprime `'Hey, todo salio bien'` y en caso contrario `'Ups, algo salio mal!'`

```
let helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey, todo salio bien');
        } else {
            reject('Ups, algo salio mal!');
        }
    });
}
```

y para ejecutar la funcion helloPromise debajo del codigo anterior se coloca lo siguiente teniendo en cuenta que ahora se dispone de la palabra reservada `then()` donde a traves de `response` permite obtener la respuesta y se ejecuta con un **arrow function** y un `console.log(response)` y presentar la respuesta.

En caso que sea rechazada se obtiene a traves de un `catch` que captura un error y permite tambien mostrarlo en consola

```
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));
```

tambien se pueden añadir mas respuestas en caso de que se requiera de la siguiente forma

```
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola))
    .catch(error => console.log(error));
```

![assets/16.png](assets/16.png)

Para hacerlo fallar se cambia `true` por `false` 

![assets/17.png](assets/17.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Clases, Módulos y Generadores

Las clases permiten aplicar la POO(Programacion Orientada a Objetos) y trabajar de una manera mas facil con los objetos en JavaScript

primero se debe definir el nombre de la clase utilizando la palabra reservada `class`, despues de esto establecer un metodo constructor con la palabra reservada `constructor(){}` y dentro de las llaves asignar las variables que en este caso estaran disponibles en el scope global.

Posteriormente se crea el metodo `sum()` el cual recibe los dos valores, se establecen los parametros, por convencion generalmente lo que esta dentro de los parametros se llaman igual que las variables del constructor pero estas se pueden llamar de forma distinta, dentro del metodo al final devuelve el valor del valor A + el valor B con `return`.

Para inicializar la clase se crea el objeto, generalmente con la palabra reservada `const` el nombre del objeto que en este caso es `calc` y para que el objeto pueda adquirir valores seguido del signo `=` la palabra `new` y el nombre de la clase `Calculator`.

Luego se hace el llamado del metodo a traves de `console.log(objeto.metodo(valores del parametro del metodo))`

```
class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(5,10));
```

![assets/18.png](assets/18.png)

para entender mas conceptos sobre POO en este enlace se encuentran los apuntes de [Programacion Orientada a Objetos](https://github.com/jeyfredc/Programacion-orientada-a-objetos-POO-) en diferentes lenguajes ademas de JavaScript

___

otro de los conceptos utilizados es `import` y `export`, los cuales se utilizan cuando se empieza a trabajar con modulos.

Para esto dentro de la carpeta **es6** crear un nuevo archivo llamado **module.js**

Crear la funcion `hello(){}` y retornar la palabra `Hello!`

```
function hello() {
	return 'Hello!'
}

export default hello
```

Ahora dentro del archivo **index.js** se utiliza la palabra reservada `import` entre el nombre del arrow function que es `{ hello }` y utilizar `from` para indicar de donde viene y establecer la ruta que seria la del archivo `./module`

```
import { hello } from './module'

hello();
```

En caso de no funcionar se puede agregar lo siguiente a **module.js**

```
const hello = () => {
	return 'hello!'
}

/* export default hello; */

module.exports = hello;
```

y en el archivo **index.js**

```
/* import { hello } from './module'

console.log(hello()) */

const hello = require('./module');

console.log(hello());
```

De esta forma estara disponible la arrow function y se podra ejecutar

![assets/19.png](assets/19.png)

___

### Generators

Es una funcion especial que retorna una serie de valores segun el algoritmo definido, como es una funcion especial su sintaxis es con `function*` cuando va de esta forma quiere decir que es un generador despues se hacen validaciones y la palabra reservada `yield` hace que el valor quede guardado de manera interna en memoria y sea posible recordarla cuando se haga el llamado de la funcion

Lo primero que se hace es establecer la funcion asi 

```
function* helloWorld(){
    if(true) {
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};
```

para hacer el llamado de la funcion se declara una constante que sea igual a la funcion y con `console.log` y el metodo `next` se pasa a traves de los valores de cada if y el metodo `value` se encarga de traer el valor de cada `yield`. El ultimo valor que traiga al hacer `console.log` sera undefined porque no existe mas anidacion de if

```
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
```

![assets/20.png](assets/20.png)

Hasta aqui vienen las caracteristicas añadidas de ES6 la cual salio en el año 2015

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## ¿Qué se implementó en ES7?

En la version 7 lanzada en junio de 2016 se establecieron nuevas funciones las cuales son include y operaciones en forma exponencial para esto, dentro de la carpeta **src** crear una subcarpeta llamada **es7** y dentro de la carpeta crear un archivo llamado **index.js**

El metodo include trabaja sobre un array o string y permite saber si hay un elemento dentro del valor, para esto se construye un array de numeros `let numbers = [1,2,3,7,8];` y ahora lo que se va a hacer es validar si el numero 7 esta en el array

```
if(numbers.includes(7)){
    console.log('Si se encuentra el numero 7');
}else{
    console.log('El numero 7 no esta dentro del Array');
}
```

![assets/21.png](assets/21.png)

otro de los valores disponibles son los exponentes para elevar un numero y esta disponible a traves del `**`

```
let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);
```

![assets/22.png](assets/22.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## ¿Qué se implementó en ES8?

En la version 8 lanzada en junio de 2017 donde se incluyo Async Await y otras caracteristicas.

Dentro de la carpeta **src** crear una subcarpeta que se llame **es8** y alli el archivo **index.js**

Una de las caracteristicas añadidas es `Object.entries` el cual permite devolver la clave y valores de una matriz.

Lo primero que se hace es establecer una constante `data` que permite establecer un objeto con varios valores.

Despues se establece otra constante llamada `entries` y despues de esto se utiliza `Object.entries` con la constante `data` donde esta haciendo la transformacion a una matriz y luego se imprime la matriz a traves de la constante `entries`

```
const data = {
    frontend: 'Diana',
    backend: 'Jeyfred',
    design: 'Vanessa',
}

const entries = Object.entries(data);
console.log(entries);
```

![assets/23.png](assets/23.png)

Para saber cuantos elementos tiene el arreglo a continuacion del console.log de la matriz se puede establecer

`console.log(entries.lenght);`

___

Otra de las caracteristicas añadidas es `Object.values` el cual devuelve los valores de un objeto a un arreglo 

```
const data = {
    frontend: 'Diana',
    backend: 'Jeyfred',
    design: 'Vanessa',
}

const values = Object.values(data);
console.log(values);
```

![assets/24.png](assets/24.png)

___

Otra caracteristica añadida es el `padStart` la cual permite añadir cuantos elementos va a tener un string, el primer parametro es maxlenght y el segundo el argumento que se va a pasar a la variable son los caracteres que se quieren añadir, hello esta formado por 5 caracteres y hi por otros 2, estos se van añadir al principio como se muestra en el ejemplo a continuacion

```
const string = 'hello';
console.log(string.padStart(7,'hi'));
```

![assets/25.png](assets/25.png)

si por ejemplo se pasara por argumento mas caracteres 

`console.log(string.padStart(7,'hiworld'));`

Se seguira imprimiendo `hihello`.

la otra caracteristica es con ` padEnd` el cual coloca los caracteres despues del string

```
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));
```

![assets/26.png](assets/26.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Async Await

Lo primero que se debe hacer es generar una constante y nombrar la funcion `helloWorld`, despues un arrow function y crear una promesa.

Esta debe contener `resolve` y `reject` y a traves de un if ternario establecer un `setTimeout` el cual recibe dos valores, el primero una funcion y el segundo el tiempo que son 3000 milisegundos, los cuales son 3 segundos, en caso contrario o de error arroja `Test Error`

```
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};
```

Async Await, permite ser mas claro a la hora de construir este tipo de funciones y trabajar de mejor forma con el asincronismo

Ahora se crea una funcion llamada `helloAsync` y la forma de indentificar Async Await es porque seguido de esto esta `async ()` y dentro de los parametros tambien se podra identificar `await`.

De esta forma hace el llamado, espera la consola y luego se imprime un resultado

```
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
```

la forma de ejecutar la funcion es con 

`helloAsync();`

![assets/27.png](assets/27.png)

otra forma de trabajar con Async await es con `Try catch` para esto se crea otra funcion y se establece

```
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

/* const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync(); */

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
};

anotherFunction();
```

Si se quiere capturar un error cambiar `true` por `false`

Para entender mejor estos conceptos visitar el siguiente [enlace](https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## ¿Qué se implementó en ES9?

En la version 9 lanzada en junio de 2018 donde se incluyo Spread Operator, Propagation properties, promise finally y otras caracteristicas mas.

Dentro de la carpeta **src** crear una subcarpeta que se llame **es9** y alli el archivo **index.js**

Generar un objeto y con el operador en reposo o Spread Opetator que son `...all` lo que se hace es separar los elementos, de esta forma al hacer console.log lo primero que se hace es traer el elemento `name` separado de los elementos `age` y `country` 

```
const obj = {
    name : 'Jeyfred',
    age: 26,
    country: 'COL',
};

let { name, ...all } = obj;
console.log(name, all);
```

![assets/28.png](assets/28.png)

tambien se puede extraer elementos para que no aparezcan de la siguiente forma 

```
const obj = {
    name : 'Jeyfred',
    age: 26,
    country: 'COL',
};

/* let { name, ...all } = obj;
console.log(name, all); */

let { country, ...all} = obj;
console.log(all);
```

![assets/29.png](assets/29.png)

otra de las caracteristicas añadidas son las propiedades de propagacion o propagation properties que permite unir 1,2,3 o los elementos que se puedan requerir de objetos a un nuevo objeto

```
const obj = {
    name: 'Jeyfred',
    age: 26,
}

const obj1 = {
    ...obj,
    country: 'COL',
}

console.log(obj1);
```

![assets/30.png](assets/30.png)

Otra caracteristica añadida es `promise.finally` que sirve para saber cuando se ha terminado un llamado y poder ejecutar alguna funcion o logica de codigo segun sea el caso

lo primero que hay que hacer es generar la promesa

```
const helloWorld = () = => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hello World')
        : reject(new Error('Test Error'))
    });
};
```

luego de esto hacer el llamado de la funcion con las palabras reservadas que anteriormente se habian visto las cuales son `then` y `catch`, pero a partir de esta version se lanza `finally` para que cuando se ejecute la funcion el programa avise que capturo la respuesta en caso de ejecutar bien o mal y tambien informe que finalizo

```
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));
```

![assets/31.png](assets/31.png)

tambien se puede establecer añadiendo tiempo con la funcion `setTimeout` y para ver otro caso cambiando `true` por `false`
```
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
```

![assets/32.png](assets/32.png)

Otra de las caracteristicas añadidas son mejoras para agrupar bloques de Regex y poder acceder a cada uno de ellos

Para esto primero se crea una constante que permitira generar el Regex, este va a ser una constitucion de manejo de fechas partiendo primero por el año, despues por el mes y por ultimo el dia

`const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/`

Luego hay que hacer match sobre la variable y pasarle un valor 

`const match = regexData.exec('2020-11-20');`

y luego obtener ada uno de los valores para al final imprimir el valor pasado en la constante `match`

```
const year = match[1];
const month = match[1];
const day = match[1];
```

luego hacer un `console.log` para capturar cada uno de los valores 

`console.log(year, month, day);`

![assets/33.png](assets/33.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## ¿Qué se implementó en ES10?

En la version 10 lanzada en junio de 2019 se añaden nuevas caracteristicas.

Dentro de la carpeta **src** crear una subcarpeta que se llame **es10** y alli el archivo **index.js**

Una de las caracteristicas incorporadas es el metodo `flat` el cual permite trabajar sobre la profundidad de un array a traves de niveles aqui se imprime el array tal y como esta

```
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3,]]];
console.log(array);
```

![assets/34.png](assets/34.png)

En caso que no funcione al correr el codigo se debe actualizar **nodejs**, en este [enlace](https://www.dbigcloud.com/sistemas-operativos/258-como-actualizar-node-js.html) se encuentra la explicacion, despues correr nuevamente el codigo con **Run Code**

luego pasa al primer nivel utilizando el metodo `flat()`

```
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3,]]];
/* console.log(array); */
console.log(array.flat());
```

![assets/35.png](assets/35.png)

y se pueden establecer todos los niveles que se requieran segun sea la matriz

```
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3,]]];
/* console.log(array); */
console.log(array.flat());
```

![assets/36.png](assets/36.png)

Otra caracteristica añadida es el metodo `flatMap()`

A continuacion se genera un array con valores del 1 al 5, lo que permite el metodo es imprimir el valor y a continuacion en este caso el valor del array multiplicado por 2

```
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));
```

![assets/37.png](assets/37.png)

Otro metodo agregado es `trimStart` el cual permite eliminar espacios en blanco en un string

```
let hello = `            hello world`;
console.log(hello);
console.log(hello.trimStart());
```

![assets/38.png](assets/38.png)

El otro metodo es `trimEnd` el cual permite eliminar espacios en blanco al finalizar un string

```
let hello = `hello world              `;
console.log(hello);
console.log(hello.trimEnd());
```

![assets/39.png](assets/39.png)

Otra caracteristica que añadio es que por ejemplo anteriormente para usar Async await, una de las formas de capturar errores era pasando el valor (error) despues de la palabra catch de esta forma

```
try{

}catch(error){
    error
}
```
Ahora se puede acceder a error sin tener que pasarlo como un parametro de catch asi 

```
try{

}catch{
    error
}
```

Otra caracteristica es `Object.fromEntries()` que convierte un arreglo a un objeto

```
let entries = [["name", "Jeyfred"], ["age", 26]]

console.log(Object.fromEntries(entries));
```

![assets/40.png](assets/40.png)

La otra caracteristica añadida es poder acceder a la descripcion de un elemento de tipo simbolo

```
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
```

![assets/42.png](assets/42.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>