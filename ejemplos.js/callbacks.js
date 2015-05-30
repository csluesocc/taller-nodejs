function funcion1(){
	console.log("Funcion 1");
}

function ejecutarFuncion(callback, param){
	callback(param);
}

ejecutarFuncion(funcion1); //pasar la funcion como parametro
ejecutarFuncion(function(){ // paso de funcion anonima
	console.log('Se ha ejecutado la funcion callback');
});