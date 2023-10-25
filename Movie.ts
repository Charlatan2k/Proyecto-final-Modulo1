import { Professional } from "./Professional"

export class Movie {
    public actors?: Professional[];
    public nacionality?: string;
    public director?: Professional;
    public writer?: Professional;
    public language?: string;
    public plataforma?: string;
    public isMCU?: boolean;
    public mainCharacterName?: string;
    public producer?: string;
    public distributor?: string;
    
    constructor(public title: string, public releaseYear: number, public nationality: string, public genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }

    public showAtributes () {
        console.log("Todos los datos de la Pelicula: " + " Titulo: " + this.title + " Release: " + this.releaseYear + " Nacionalidad: " 
        + this.nationality + " Género: " + this.genre + " Actores " + this.actors + " Director: " + this.director + " Guionista: " + this.writer
        + " Idioma: " + this.language + " Plataforma: " + this.plataforma + " MCU: " + this.isMCU + " Caracter: " + this.mainCharacterName 
        + " Productor: " + this.producer + " Distribuidor: " + this.distributor)
    }
}
