
import { Professional } from "./Professional";
import { Movie } from "./Movie";
import { Imdb } from "./imdb";

let pelis: Movie[] = [
    new Movie("Godzilla", 1994, "USA", "Aventura"),
    new Movie("The Godfather", 1972, "Coppola USA-Italian", "Thriller"),
    new Movie("John Wick", 2008, "Kenu USA", "Acción")
  ];
  
let imdb = new Imdb(pelis);
console.log(imdb.peliculas);
