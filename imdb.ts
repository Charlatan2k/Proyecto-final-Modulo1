
import { Professional } from "./Professional";
import { Movie } from "./Movie";

export class Imdb {
    constructor(public peliculas: Movie[]) {
      this.peliculas = peliculas;
    }
  }
  
let pelis: Movie[] = [
    new Movie("Godzilla", 1994, "USA", "Aventura"),
    new Movie("The Godfather", 1972, "Coppola USA-Italian", "Thriller"),
    new Movie("John Wick", 2008, "Kenu USA", "Acción")
  ];
  
// Paso 6: Lectura/Escritura en Fichero
// 1. Convertir a un string el objeto Imdb.
let imdb = new Imdb(pelis);
let imdbString = JSON.stringify(imdb);
console.log(imdbString);

// 2. Guardar dicho objeto en fichero JSON con nombre “imdbBBDD.json”.
import * as fs from "fs";
fs.writeFileSync("imdbBBDD.json", imdbString);


// let imdbString1 = fs.readFileSync("imdbBBDD.json", );
// let imdb1 = JSON.parse(imdbString1);

  