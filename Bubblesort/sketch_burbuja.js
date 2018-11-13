var elementos = [];

function setup() {
	createCanvas(800, 500);

	// Se crea un arreglo de tamaño igual al ancho de la pantalla.
	for(var i = 0; i < width; i++) {
		elementos[i] = random(height);
	}
}

// La funcion draw funcionara como nuestro for externo, ya que esta
// se ejecuta de manera ciclica para mantener las imagenes en la pantalla.
function draw(){
	background(51);

	// Se compara cada uno de los elementos en el arreglo para colocarlos
	// de mayor a menor.
	for(var j = 0; j < width - 1; j++) {
		var a = elementos[j];
		var b = elementos[j+1];
		if(a > b) {
			swap(j, j + 1);
		}
	}

	// Se grafican cada uno de los valores del arreglo.
	for(var i = 0; i < width; i++) {
		stroke(255);
		line(i, height, i, height - elementos[i]);
	}
}

// Funcion para invertir los valores de los indices.
function swap(i, j) {
	var auxiliar = elementos[i];
    elementos[i] = elementos[j];
	elementos[j] = auxiliar;
}