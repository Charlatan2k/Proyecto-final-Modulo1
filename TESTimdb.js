"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movie_1 = require("./Movie");
var imdb_1 = require("./imdb");
var pelis = [
    new Movie_1.Movie("Godzilla", 1994, "USA", "Aventura"),
    new Movie_1.Movie("The Godfather", 1972, "Coppola USA-Italian", "Thriller"),
    new Movie_1.Movie("John Wick", 2008, "Kenu USA", "Acción")
];
var imdb = new imdb_1.Imdb(pelis);
console.log(imdb.peliculas);
