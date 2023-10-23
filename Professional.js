"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
// Clase Professional. Proyecto Final Modulo 1.
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.showAttributes = function () {
        console.log("Nombre: " + this.name + " Edad: " + this.age + " Peso: " + this.weight + " Altura: "
            + this.height + " ¿Retirado? " + this.isRetired + " Nacionalidad: " + this.nationality + " Nº Oscars: "
            + this.oscarsNumber + " Profesion " + this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
