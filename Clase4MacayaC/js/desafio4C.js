//funcion pedir datos al usuario

function pedirDatos () {
    
    numero1 = parseInt(prompt("Ingrese el primer numero para verificar si es multiplo de otro"));
    numero2 = parseInt(prompt("Ingrese el segundo numero"));
    


};


//funcion calcular si es multiplo

function esMultiplo(number1,number2) { 
if(( number1 % number2 ) == 0){

	alert(number1 + ' es multiplo de ' +number2);
    
}else{

	alert(number1 + ' no es multiplo de ' +number2);

}

};


//funcion para iniciarlizar y evaluar si quiere continuar

function inicializar () {
let isConfirmed = true;

do {
    pedirDatos();  
    console.log(esMultiplo(numero1,numero2));
    isConfirmed = confirm("Quiere continuar?");
}
while (isConfirmed) {
 isConfirmed = !isConfirmed;


}

}

inicializar();