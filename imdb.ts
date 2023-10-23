
import { Professional } from "./Professional";
import { Movie } from "./Movie";

export class Imdb {
    constructor(public peliculas: Movie[]) {
      this.peliculas = peliculas;
    }
  }
