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