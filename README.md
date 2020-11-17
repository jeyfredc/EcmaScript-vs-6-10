# ES6+

[Default Params y Concatenación](#Default-Params-y-Concatenación)

[LET y CONST, Multilínea, Spread Operator y Desestructuración](#LET-y-CONST-Multilínea-Spread-Operator-y-Desestructuración)

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

Al hacer `consolo.log`, solo esta disponible la palabra Global Var, porque esta en el scope global, pero Global Let no se encuentra disponible porque solo funciona dentro del bloque de codigo

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