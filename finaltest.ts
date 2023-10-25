// Paso 8: solicite por pantalla cada uno de las propiedades de la clase Profesional 
// e inserte un nuevo profesional a una película del fichero “imdbBBDD.json”

import * as fs from 'fs';
import * as readlineSync from 'readline-sync';
import { Imdb } from './imdb';
import { Movie } from './Movie';
import { Professional } from './Professional';
import { log } from 'console';

let profesional = new Professional("Cloony", 47, 85, 190, false, "Spain", 2, "actor");
let pelis: Movie[] = [
    new Movie("Godzilla", 1994, "USA", "Aventura"),
    new Movie("The Godfather", 1972, "Coppola USA-Italian", "Thriller"),
    new Movie("John Wick", 2008, "Kenu USA", "Acción")
  ];
let imdb4 = new Imdb(pelis);
  
  let nombre = readlineSync.question('Nombre: ');
  let edad = readlineSync.question('Edad: ');
  let genero = readlineSync.question('Género: ');
  let peso = readlineSync.question('Peso: ');
  let altura = readlineSync.question('Altura: ');
  let colorPelo = readlineSync.question('Color de pelo: ');
  let colorOjos = readlineSync.question('Color de ojos: ');
  let raza = readlineSync.question('Raza: ');
  let nacionalidad = readlineSync.question('Nacionalidad: ');
  
  let peliculas = imdb4.peliculas;
 
console.log(imdb4);
