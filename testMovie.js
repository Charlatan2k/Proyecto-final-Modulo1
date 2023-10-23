"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movie_1 = require("./Movie");
var padrino = new Movie_1.Movie("Padrino", 1978, "ItalonoAmericano", false);
padrino.plataforma = "Netflix";
console.log(padrino.showAtributes());
