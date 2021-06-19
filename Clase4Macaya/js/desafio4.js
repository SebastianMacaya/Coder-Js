// Saludo

const saludo = () => {
  let nombre = prompt("Ingresa tu nombre");

  alert("Buenos Dias " + nombre);
  alert("Bienvenid@ a farafello");
};

saludo();
let total = 0;
let electrodomesticos = 0;

let isConfirmed = true;

//El usuario elige los electrodomesticos  para comprar
const comprar = () => {
  return parseInt(
    prompt(
      "¿Qué le gustaría comprar?\n1:Heladera       $35000\n2:Microondas     $16500\n3:Televisor    $75000\n4:Salir"
    )
  );
};
let result = 0;

while (isConfirmed) {
  result = comprar();

  switch (result) {
    case 1:
      total += 35000;
      break;
    case 2:
      total += 16500;
      break;
    case 3:
      total += 75000;
      break;

    case 4:
      isConfirmed = confirm("Seguro que quiere salir?");
      isConfirmed = !isConfirmed;
      alert("Usted nos debe $" + total);
      alert("Gracias por elegirnos");
      break;

    default:
      alert("Dato incorrecto, por favor vuelva a intentar");
      break;
  }
}
