const { set } = require("core-js/fn/dict");

//superclase cliente
class Cliente {
    constructor (nombre){
        this.nombre = nombre;
        this.impuestos = impuestos;
    }
}

//getters y setters de Cliente
getNombre (){
    return this.nombre;
}

setNombre (nombre) {
    this.nombre = nombre;
}

let c1 = new Cliente ("Jose Perez")

//clase impuestos
class Impuestos {
    constructor(monto_bruto_anual, deducciones)
    this.monto_bruto_anual = monto_bruto_anual;
    this.deducciones = deducciones;  
}

//getters y setters de monto bruto
getNombre (){
    return this.nombre;
}

setNombre (nombre) {
    this.nombre = nombre;
}

//getters y setters de deducciones
getNombre (){
    return this.nombre;
}

setNombre (nombre) {
    this.nombre = nombre;
}




