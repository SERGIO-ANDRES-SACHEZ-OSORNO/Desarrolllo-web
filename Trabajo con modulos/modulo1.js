
import {imprimirObjeto,carros,costoPedido, costoInventario, costoInventarioVenta, totalUnidades } from "./modulo2.js";

 export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

export let vehiculo ={
    tipo: 'Auto',
    tipoDesplazamiento:'Terrestre',
          
    caracteristicas:{
        colorVehiculo:'Negro',
        marca:'Chevrolet ',
        modelo:'Spark GT 2023',
        valorBruto:12500000,
        valorNeto:35000000,
        cantidadInventario:200,
        cantidadPedida:20,
    },
    velocidad:{
        velocidadMaxima:'300 Km/h',
        aceleracion:' de 0 a 100 Km/h',
        tiempoMinimoAceleracion: '5',       
    }
    
}
console.log(imprimirObjeto());
console.log('Actualmente en el inventario hay '+totalUnidades()+ ' unidades' );
console.log('El costo del pedido es de '+formatter.format(costoPedido())+ ' Millones de pesos' );
console.log('El costo del inventario teniendo en cuenta el valor bruto es de '+formatter.format(costoInventario())+ ' Millones de pesos' );
console.log('El costo del inventario teniendo en cuenta el valor neto es de '+formatter.format(costoInventarioVenta())+ ' Millones de pesos' );


 export class carros{
    constructor(colorLlantas, numPuertas, colorSilleteria, cantidadLlantas ){
        this.colorLlantas=colorLlantas;
        this.colorSilleteria=colorSilleteria;
        this.numPuertas=numPuertas;
        this.cantidadLlantas= cantidadLlantas;
        
        detalleCarro:{
            return `El desplazamiento del ${carro.tipo} es ${carro.tipoDesplazamiento} \n
                    Las llantas son de color ${this.colorLlantas} \n
                    El color de la silleteria es ${colorSilleteria} \n
                    Tiene ${numPuertas} puertas`
        }      

    }
        
}

export class Camion extends carros{
    constructor(remolque, capacidadCarga, tamañoRemolque){
        super (colorLlantas, numPuertas, colorSilleteria )
        this.remolque=remolque;
        this.capacidadCarga=capacidadCarga;
        this.tamañoRemolque=tamañoRemolque;

        // detalleCamion:{
        //     return ``
        // }
    }   
}

// const carro1= new carro;
// console.log(detalleCarro(carro1('negras', '4','Blancas', '4')));
