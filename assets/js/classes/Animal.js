import { Propietario } from './Propietario.js';

export class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this.tipo = tipo;
    }

    get tipoAnimal() {
        return `El tipo de animal es un: ${this.tipo}`;
    }
}
