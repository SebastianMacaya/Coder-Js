// constructor

class Hardware {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
  // funcion leer
  leer() {
    console.log("Usted Creo " + this.modelo + "al precio de $" + this.precio);
  }
}

//Creando objeto por usuario
let n = parseInt(prompt("Ingrese cuantos hardware quiere agregar"));

for (i = 0; i < n; i++) {
  let marca = prompt("Ingrese la marca");
  let modelo = prompt("Ingrese el modelo");
  let precio = parseInt(prompt("Ingrese el precio"));
  const obj = new Hardware(marca, modelo, precio);
  obj.leer();
}

console.log(i[2]);
