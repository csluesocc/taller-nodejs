/*
 * variables
 */

var edad = 18;
var nombre = "Sid";
var apellido = "Floyd";

// variable global
global_var = "NODEJS";

// Constante 
const PI = 3.1416;

// Esto da error
//PI = 3.15; 

/* Tarea:
 * Tipos de datos en JavaScript
 */


/* 
 * Funciones
 */

// definicion standard
function suma(a, b) {
	return a + b;
}

console.log(suma(3, 8));

// asignar funcion a una variable
var sumer = function(a, b){
	return a + b;
};

console.log(sumar(3, 8));

// Funcion inmediata
(function(){
	console.log('Esta funcion se ejecuta inmediatamente');
})();


/*
 * Arrays
 */

// definicion
var arr = [25];
arr[0] = 8;
arr.push(10, 5);

console.log(arr);

// Algunos metodos
arr.sort();
console.log(arr);

console.log("Posicion del numero 8 en el array: " + arr.indexOf(8));

var strArr = ['Hello', ' World'];
console.log(strArr);
console.log(strArr.join(''));

// Mas info: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array


/*
 * Sentencias de control
 */
var a = "10";
var b = 10;
var nums = [0,1,2,3,4,5,6];

 // if 
 if (a == b){
 	console.log('a y b son iguales');
 }

 if(a === b){
 	console.log('a y b son iguales');	
 }else{
 	console.log('a y b no son iguales');
 }

 // for
 for(var i = 0; i<nums.length; i++){
 	console.log(nums[i]);
 }

 // while
 var i = 0;
 while(i<nums.length){
 	console.log(nums[i++]); 
 }

 /* Tarea:
  * Como se implemente el do... while en js
  * sentencia switch
  */


/*
 * Objetos
 */

// Definicion de una clase en js
var Persona = function (nombre, apellido, edad) {
	this.nombre = nombre || '';
	this.apellido = apellido || '';
	this.edad = edad || 0;	
}

// Instancia de clase
var persona1 = new Persona('Sid', 'Floyd', '30');
var persona2 = new Persona();

persona2.nombre = "Janis";
persona2.apellido = "Joplin"
persona2.edad = 29;

// Persona1
console.log("Nombre completo: " + persona1.nombre + " " + persona1.apellido + "\nEdad:" + persona1.edad);
// Persona 2
console.log("\nNombre completo: " + persona2.nombre + " " + persona2.apellido + "\nEdad:" + persona2.edad);


/* Tarea: 
 * Investigar sobre Prototype en JavaScript 
 */



/*
 * JSON
 */

// Objeto
var persona = {
	nombre: 'Jane',
	apellido: 'Floyd',
	edad: 25,
	toString: function(){
		var nombre = "Nombre: " + this.nombre,
		  apellido = "Apellido: " + this.apellido,
		  edad = "Edad: " + this.edad;

	  	return nombre + "\n" + apellido + "\n" + edad;
	}
};

console.log(persona);
console.log(persona.toString());

persona['edad'] = 29; //notacion de array
console.log(persona.edad);