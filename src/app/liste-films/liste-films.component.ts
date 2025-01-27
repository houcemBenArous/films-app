import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-films.component.html',
  styleUrl: './liste-films.component.css'
})
export class ListeFilmsComponent {
  
  tabFilms = [ { nomFilm : "Mission Impossible:Fallout",
    imageFilm : "assets/films/miFallout.jpg",
    nbJaime:0,
    nbJeNaimeps: 0,
    disponible : true },
    {nomFilm: "Mission Impossible 2",
    imageFilm : "assets/films/mi2.jpg",
    nbJaime:0,
    nbJeNaimeps: 0,
    disponible : false },
    { nomFilm : "Mission impossible :Protocole Fantôme ",
    imageFilm : "assets/films/miFantome.jpg",
    nbJaime:0,
    nbJeNaimeps: 0,
    disponible : true
   }
    ] ;


    onJaime(i : number) {
      this.tabFilms[i].nbJaime++;
      console.log('J\'aime ce film' + this.tabFilms[i].nbJaime);
      }

    onJaimePas(i : number) {
      this.tabFilms[i].nbJeNaimeps++;
      console.log('J\'aime pas ce film' + this.tabFilms[i].nbJeNaimeps);
      }

    getColor(x:number,y:number){
      if(x>y){
        return "#1c8454";
      }else if (x==y){
        return "#ffffff";
      }else{
        return "#dc3444";
      }
    }
}
