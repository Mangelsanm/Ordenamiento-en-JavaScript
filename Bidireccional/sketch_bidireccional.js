// Miguel Mares, mares112358@gmail.com
// metodo de ordenamiento: Burbuja bidireccional

var variables = [];

function setup() {
	createCanvas(800, 500);

	// numero de elementos que contendra el arreglo
	// igual al ancho del canvas.
	for(var i = 0; i < width; i++) {
		variables[i] = random(height);
	}
}

// usamos la funcion draw como un while, ya que esta
// se ejecuta de manera ciclica para refrescar el canvas.
function draw(){
	background(51);

	// valores de los indices iniciales
 	var izquierda = 0; 
 	var derecha = width - 1;
 	var auxiliar = 0;

 	// ciclo for para colocar los numeros mas grandes al final del arreglo
	for(i = izquierda; i < derecha; i++) {
		if(variables[i] > variables[i + 1]) {
			auxiliar = variables[i];
			variables[i] = variables[i + 1];
			variables[i + 1] = auxiliar;
		}
	}

	// ciclo for para colocar los numeros mas pequeños al inicio del arreglo
	for(j = derecha; j > izquierda; j--) {
		if(variables[j] < variables[j - 1]) {
			auxiliar = variables[j];
			variables[j] = variables[j - 1];
			variables[j - 1] = auxiliar;
		}
	}
	
	// disminuimos y aumentamos los idices inferior y superior para no volver
    // a repasar todo el arreglo, ya que los valores extremos se van acomodando
    // en su lugar correcto al terminar cada uno de los ciclos anteriores
	izquierda++;
	derecha--;

	// Se grafican cada uno de los valores del arreglo.
	for(var i = 0; i < width; i++) {
		stroke(255);
		line(i, height, i, height - variables[i]);
	}
}