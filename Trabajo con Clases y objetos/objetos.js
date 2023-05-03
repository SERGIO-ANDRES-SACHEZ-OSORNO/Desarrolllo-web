const persona={
    primerNombre:'Juan',
    apellido:'Perez',
    edad:'22',
    documentoIdentidad: 5612,
    caracteristicas:{
        colorCabello:'Rojo',
        etnicidad:'Indueuropeos',
        idiomaMaterno:'español',

    },
    //metodo
    saludar: function(){
        return `Hola  ${this.primerNombre} ${this.apellido}`
    }
};
// accediendo al metodo
console.log(persona.saludar());
//acceder ala propiedad forma 1
console.log(persona.apellido);
//acceder ala propiedad forma 2
console.log(persona['primerNombre']);

//clases

class Persona{
    constructor(primerNombreUsuario,apellidoUsuario){
        this.primerNombreUsuario=primerNombreUsuario;
        this.apellidoUsuario=apellidoUsuario;
    }
    saludarPersona(){
        return `Hola  ${this.primerNombreUsuario} ${this.apellidoUsuario}`
    }        
}
// se crea O INSTANCIA un objeto de tipo persona
let Personita = new Persona('Juan','Perez')
Personita.primerNombreUsuario='Carlos';
Personita.apellidoUsuario='Cantor'
console.log(Personita);
console.log(Personita.saludarPersona());

//Herencia

class animales{
    constructor(nombre,edad,sonido){
        this.nombre=nombre;
        this.edad=edad;
        this.sonido=sonido;
    }
    sonido(){
        return `${this.nombre} tiene el sonido ${this.nombre}`;
    }
}

class Gatos extends animales{
    constructor(nombre, edad,sonido,cazador){
        super(nombre,edad,sonido)
        this.cazador=cazador;
    }
    //metodo
    maullar(){
        return `Yo puedo hacer el sonido ${this.sonido}`;
    }
}

//crear un animal especificamente un gato

let gato= new Gatos('Alberto', 52,'Meow', true);

console.log(gato.maullar());
console.log(persona);
/*
1. crear un objeto que tenga como minimo dos metodos, 
ademas debe tener una propiedad que sea un objeto.

2. crear otra clase que herede de otra donde debe poseer minimo 3
propiedades para el constructor.

3. crear una funcion flecha que tenga uso de las clases construidas y
del objeto declarado

*/


// Punto 1

const vehiculo1={
    tipo_1:'Automovil',
    tipo_2:'Motos',
    tipo_3:'Bus', 
      
    caracteristicas:{
        colorVehiculo:'Negro',
        marca:'Renault',
        modelo:'2023',
    },
    velocidad:{
        velocidadMaxima:'300 Km/h',
        aceleracion:' de 0 a 100 Km/h',
        tiempoMinimoAceleracion: '5',
        marca:'Renault',
        modelo:'2023',
    },
    //metodo
    lavado: function(){
        return `El  ${this.tipo_1} de color ${this.caracteristicas.colorVehiculo} marca
         ${this.caracteristicas.marca}  y modelo ${this.caracteristicas.modelo} se encuentra en la zona de lavado`
    },

    marcha: function(){
        return `El  ${this.tipo_1} tiene una velocidad maxima de ${this.velocidad.velocidadMaxima} alcanzando una aceleracion de
         ${this.velocidad.aceleracion}  en  ${this.velocidad.tiempoMinimoAceleracion} segundos`
   
    }

};
console.log(vehiculo1.lavado());
console.log(vehiculo1.marcha());

// Punto 2

class vehiculo{
    constructor(medioMovilizacion, tipoTransporte, tipoServicio){        
        this.medioMovilizacion=medioMovilizacion;
        this.tipoTransporte=tipoTransporte;
        this.tipoServicio=tipoServicio;
        
    }
    detalle(){
        return `${this.medioMovilizacion}, el tipo de transporte es de ${this.tipoTransporte} y es de servicio ${this.tipoServicio}`;
    }
};
/*
let automovil = new vehiculo ('Terrestre', 'Pasajeros', 'Particular');
console.log('El automovil se moviliza via '+ automovil.detalle())
*/
let avion = new vehiculo ('Aerea', 'Pasajeros', 'Publico');
console.log('El avion se moviliza via '+ avion.detalle())

let barco = new vehiculo ('Maritima', 'carga', 'privado');
console.log('El barco se moviliza via '+ barco.detalle())

class automovil extends vehiculo{
    constructor(medioMovilizacion, tipoTransporte, tipoServicio, marca, modelo, color, unidades, costoUnidad){
        super(medioMovilizacion, tipoTransporte, tipoServicio)
        this.marca=marca;
        this.modelo=modelo;
        this.color=color;
        this.unidades=unidades;
        this.costoUnidad=costoUnidad;
    }
    detalleAutomovil(){
        return `
        ----------------------------------------------------
        Las caracteristicas del automovil son las siguientes
        -----------------------------------------------------
        Desplazamiento      ${this.medioMovilizacion}
        Transporte          ${this.tipoTransporte}
        Servicio            ${this.tipoServicio}
        Marca               ${this.marca}
        Modelo              ${this.modelo}
        color               ${this.color}
        -----------------------------------------------------`        
    };
};

let carro= new automovil('Terrestre', 'Pasajeros', 'Particular','Renault', 'Sandero - 2023', 'Negro', 20, 25250000);

console.log(carro.detalleAutomovil());

const costoInventario =(unidades, costoUnidad) => {
    unidades= automovil.unidades;
    costoUnidad = automovil.costoUnidad;
    return unidades  * costoUnidad;
    
};

console.log('El costo del inventario es ' + costoInventario());
