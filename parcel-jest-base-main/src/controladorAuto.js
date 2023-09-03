
class controlAuto{
    mover_auto(comandos){

    let datos = comandos.split("/")
    let matriz;
    let posicion;
    let direccion;
    let movimentos;

    if (comandos === "" || comandos === " "){
        return "Cadena vacia";
    }
    else if (datos.length < 2){
        return `${matriz}`;
    }

    else if (datos.length < 3){
        matriz = this.obtener_matriz(datos[0])
        posicion = this.obtener_posicion(datos[1])
        direccion = this.obtener_direccion(datos[1])
        return `${matriz},${posicion} ${direccion}`;
    }

    matriz = this.obtener_matriz(datos[0])
    posicion = this.obtener_posicion(datos[1])
    direccion = this.obtener_direccion(datos[1])
    movimentos = datos[2]

    return `${matriz},${posicion} ${direccion}, ${movimentos}`;
        
    }

    obtener_matriz(datos)
    {
        let matriz = datos.split(",").map(Number)
        return matriz  
    }

    obtener_posicion(datos){
        let posicion = datos.split(",");
        return posicion
    }
    
    obtener_direccion(datos){
        let direccion = datos;
        return direccion
    }




    
}

export default controlAuto;