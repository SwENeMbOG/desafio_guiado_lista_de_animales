// main.js
import { Mascota } from './classes/Mascota.js';

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el submit del formulario

    // Capturar los valores del formulario
    const nombrePropietario = document.getElementById("propietario").value;
    const telefonoPropietario = document.getElementById("telefono").value;
    const direccionPropietario = document.getElementById("direccion").value;
    const nombreMascota = document.getElementById("nombreMascota").value;
    const tipo = document.getElementById("tipo").value;
    const enfermedad = document.getElementById("enfermedad").value;

    if (nombrePropietario && telefonoPropietario && direccionPropietario && nombreMascota && tipo && enfermedad) {
        // Crear la instancia de Mascota
        const mascota = new Mascota(nombrePropietario, direccionPropietario, telefonoPropietario, tipo, nombreMascota, enfermedad);

        // Mostrar los resultados agregando a la lista
        const resultado = document.getElementById("resultado").querySelector("ul");
        const nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = `
            <li>${mascota.datosPropietario()}</li>
            <li>${mascota.datosMascota()}</li>
        `;
        resultado.appendChild(nuevoElemento);
        // Limpiar los campos del formulario
        document.getElementById("formulario").reset();
    }
    else {
        alert("Por favor, completa todos los campos del formulario.");
    }
});
