
class controlAuto{
    mover_auto(cadena){
        if (cadena === "" || cadena === " "){
            return "Cadena vacia";
        }
        else{
            return cadena;
        }
        
    }

    matriz(cadena)
    {
        let matriz = cadena.split(",")
        return toString(matriz);    
    }
    
}

export default controlAuto;