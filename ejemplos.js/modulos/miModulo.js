var saludo = function (nombre){
	console.log('Hola ' + nombre);
}

//exportar modulo
module.exports = {
	saludo: saludo
}