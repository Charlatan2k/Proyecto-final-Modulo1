"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.showAtributes = function () {
        console.log("Todos los datos de la Pelicula: " + " Titulo: " + this.title + " Release: " + this.releaseYear + " Nacionalidad: "
            + this.nationality + " Género: " + this.genre + " Actores " + this.actors + " Director: " + this.director + " Guionista: " + this.writer
            + " Idioma: " + this.language + " Plataforma: " + this.plataforma + " MCU: " + this.isMCU + " Caracter: " + this.mainCharacterName
            + " Productor: " + this.producer + " Distribuidor: " + this.distributor);
    };
    return Movie;
}());
exports.Movie = Movie;
