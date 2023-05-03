
import { formatter, vehiculo, carros} from './modulo1.js';


export let  imprimirObjeto= ()=>{
    
    console.log('Las caracteristicas del ' +vehiculo.tipo +' son las siguientes: \n'+
    '--------------------------------------------------------------------------------------'+
    'Tipo de desplazamiento  '+vehiculo.tipoDesplazamiento+ '\n'+
    'Marca                   '+ vehiculo.caracteristicas.marca+ '\n'+
    'Modelo                  '+ vehiculo.caracteristicas.modelo+ '\n'+
    'Color                   '+ vehiculo.caracteristicas.colorVehiculo+ '\n'+
    'Velocidad Maxima        '+ vehiculo.velocidad.velocidadMaxima+ '\n'+
    'El tiempo minimo para acelerar de 0 a 100 es de ' + vehiculo.velocidad.tiempoMinimoAceleracion +' segundos'+ '\n'+
    '--------------------------------------------------------------------------------------' + '\n'+
    'La cantidad en invetario es de '+vehiculo.caracteristicas.cantidadInventario+' Unidades\n'+
    'El perido para la agencia de Medellin es de: ' + vehiculo.caracteristicas.cantidadPedida + ' unidades \n'+
    'con un costo unitario de ' +formatter.format(vehiculo.caracteristicas.valorBruto) +'\n'
    
    
    )      
}
export let costoPedido=() =>{       
        
        return vehiculo.caracteristicas.cantidadPedida *vehiculo.caracteristicas.valorNeto
}

export let costoInventario=() =>{       
        
    return vehiculo.caracteristicas.cantidadInventario *vehiculo.caracteristicas.valorBruto
}

export let costoInventarioVenta=() =>{       
        
    return vehiculo.caracteristicas.cantidadInventario *vehiculo.caracteristicas.valorNeto
}

export let totalUnidades=() =>{       
        
    return vehiculo.caracteristicas.cantidadInventario  - vehiculo.caracteristicas.cantidadPedida
}

export let detalledelCarro=(carros)=>{
   
    return 'El ${} tiene llantas de color'
}
 

//colorLlantas, numPuertas, colorSilleteria, cantidadLlantas 