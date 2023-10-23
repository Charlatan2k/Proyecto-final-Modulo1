
import { Professional } from "./Professional";
import { Movie } from "./Movie";

export class Imdb {
    constructor(public peliculas: Movie[]) {
      this.peliculas = peliculas;
    }

    // Toma el nombre de un fichero como parámetro de entrada y 
    // genera un fichero .json con toda la información guardada en el objeto Imdb.
    public escribirEnFicheroJSON(nombreFichero: string){
        let imdbString3 = JSON.stringify(this);      
        fs.writeFileSync(nombreFichero, imdbString3);
          }
    }
  
let pelis: Movie[] = [
    new Movie("Godzilla", 1994, "USA", "Aventura"),
    new Movie("The Godfather", 1972, "Coppola USA-Italian", "Thriller"),
    new Movie("John Wick", 2008, "Kenu USA", "Acción")
  ];
  
// Paso 6: Lectura/Escritura en Fichero
// 1. Convertir a un string el objeto Imdb.
let imdb2 = new Imdb(pelis);
let imdbString = JSON.stringify(imdb2);
// console.log(imdbString); // lo pasa como objeto

// 2. Guardar dicho objeto en fichero JSON con nombre “imdbBBDD.json”.



import * as fs from "fs";
fs.writeFileSync("imdbBBDD.json", imdbString);

let data = fs.readFileSync("imdbBBDD.json", "utf8");
let imdb3: Imdb = JSON.parse(data);

// console.log(data); // lo lee como objeto
// console.log(imdb3); // lo lee como array normal

imdb2.escribirEnFicheroJSON("NuevoFicheroConPelis"); // comprobacion de metodo escribirEnFicheroJSON en clase imdb
