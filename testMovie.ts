
import { Professional } from "./Professional";
import { Movie } from "./Movie";

let padrino = new Movie("Padrino", 1978, "ItalonoAmericano", "Acción");
padrino.plataforma = "Netflix";
console.log(padrino.showAtributes());
