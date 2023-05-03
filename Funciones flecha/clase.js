console.log("Hola mundo") //imprimir en consola
Math.random();
console.log(Math.random());
let edad;
let age=10;
let mensaje="Hola queridos usuario";
var mensaje2="Bienvenidos";
console.log(mensaje +" "+ mensaje2 +"" + "el promedio de edad es de" +" "+ age +" " +"anos");
console.log(mensaje2.length + mensaje.length);
let encontrado=null;
/*
hola
hola
hola

 */
const edad1=20;
const moneda="COP"
const NumeroColunnas=4;
//NumeroColunnas=8;
//funcion normal
function sumar(Numero1, Numero2)
{
return Numero1+Numero2
};

//funcion anonima
const hola = function ()
{
return "hola"
};

//funcion de flecha
const sum=(Numero1,Numero2)=>
{
    return Numero1+Numero2;
};

let resultado=sum(3,5);
console.log("El resultado es: "+ resultado);

//funcion con un solo paramtros
const multiplicarDos=Numero =>
{
    return Numero*2
};

//funcion sin parametros
const flecha =() =>
{
return Numero1;
};

let i=10;
const imprimirNumero= i =>
{
    for( j=0; j<i;j++)
    {
        console.log(j);
    }
    return i;
};

const saludo=()=>
{
    mensaje3="hola para todos"
    return mensaje3;
}
 Numero4=200;
 Numero5=10;
 const DividirdosNumeros=(Numero4,Numero5)=>
 {
     return "El resultado de la division es: "+ Numero4/Numero5;
 };

 console.log(DividirdosNumeros(Numero4,Numero5))
console.log(saludo());
console.log(imprimirNumero(i));

let Numeros=[1,2,3,4,5,6,7,8,9];
//ingresar un dato adicional al final del arreglo
Numeros.push(10);
//sacar el ultimo dato  del arreglo
Numeros.pop();

const ingresarNunero = Numeros =>
{
    let Numeroingresado=Numeros.push(520)
    return Numeroingresado
}

const sacarNunero = Numeros =>
{
    return Numeros.pop(200)
}

console.log(ingresarNunero())
//console.log(sacarNunero())
console.log(Numeros)

