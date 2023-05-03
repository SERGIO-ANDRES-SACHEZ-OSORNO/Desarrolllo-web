// Funcion tipo flecha
let sumar=(number)=>{
    return number +5;
}
//llamo la funcion sumar
let f=sumar;
console.log(f(5));// usando f
console.log(sumar(5));// usando sumar


/* Callback functions
* Se trata de enviarle como parámetro de entrada en una función
* en otra función
*
*/

const esPar= (numero)=>{
    return numero%2 ==0; // Regresa un booleano
}

const validarParidad=(num,callbackFN)=>{
    const esPar=callbackFN(num);
    console.log('El numero es entero? : '+esPar);

}


//Funcion tipo flecha
const dividePorDos=(numero)=>{return numero/2;}


const divideNumero =(numero, callbackFn)=>{return callbackFn(numero)}
console.log(divideNumero(10,dividePorDos));

//Metodos para arreglos

const numeros=[1,2,3,20,893,452]
let numeroDos=[1,2,3,20,893,452]

//.reduce()

const sumaValores = numeros.reduce((acummulador,valorActual)=>{
    return acummulador+valorActual;
}
);
console.log(sumaValores)

//.foreach
const fnDos = numeroDos.forEach(numero=>{
    console.log(numero)
});

//.fillter

const fntres = numeroDos.filter(numeros =>{
    //colocar la condicion
    return numeros>10 && numeros<800;
});

console.log(fntres);

//.map()

const nombresPersonas=["sergio","juan", "mauricio","susana","maria"];
const edad=["47", "37", "45", "10", "11"];

const Anuncios=nombresPersonas.map((miembro)=>{
    return  miembro 
});
 
console.log(Anuncios);

//funciones callback propuestas

const funcion1 =(callback) =>{
    console.log("Inicio del proceso");
    callback();
    console.log("Proceso finalizao");
};

const funcion2=()=>{
    console.log("Proceso Intermadio");
};

funcion1(funcion2);


/*Metodo investigado es el .every este sirve para hacer un test y
  verificar si estos cumplen con x condicion y devuelve un valor
   booleano*/

let arreglo =[2,4,6,8,10,12]

arreglo.forEach(function(item, index){
    console.log(item,index);
});



const arr =[0,23,5,2,234,98,22,56,88];
let testpassed= false;

const passed= arr.every((item)=>item > 0);
console.log(passed);