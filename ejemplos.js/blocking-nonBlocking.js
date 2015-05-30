var fs = require('fs'); //Importar modulo

// Leer archivo de forma sincrona
var nLineas = fs.readFileSync('longText.txt', 'utf-8').split('\n').length - 1;

console.log('Leer Archivo:');
console.log('El archivo tiene ' + nLineas + ' lineas');
console.log('Node.js es excelente!');

// Leer archivo de forma asincrona
console.log('Leer Archivo:');
fs.readFile('longText.txt', 'utf-8', function(err, data){
	if (err) throw err;
	var lineas = data.split('\n').length - 1;
	console.log('El archivo tiene ' + lineas + ' lineas');
});
console.log('Node.js es excelente!');
