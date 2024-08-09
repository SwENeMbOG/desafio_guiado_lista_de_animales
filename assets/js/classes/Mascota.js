import { Animal } from './Animal.js';

export class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombre() {
        return this._nombreMascota;
    }

    set nombre(nombreMascota) {
        this._nombreMascota = nombreMascota;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }

    datosMascota() {
        return `${this.tipoAnimal}, el nombre de la mascota es: ${this.nombre} y está enfermo de: ${this.enfermedad}`;
    }
}
