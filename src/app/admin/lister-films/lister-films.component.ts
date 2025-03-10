import { Component } from '@angular/core';
import { Film } from '../../shared/models/film';
import { FilmsService } from '../../services/films.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lister-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lister-films.component.html',
  styleUrl: './lister-films.component.css'
})
export class ListerFilmsComponent {
  tabFilms: Film[] = [];
  constructor(private filmsService : FilmsService) { }
  
  ngOnInit(): void {
    this.tabFilms=this.filmsService.getFilms();
    }

  supprimer(index : number){
    this.filmsService.delete(index);
  }
  confirmAndDelete(index : number){
    if (confirm("voulez vous supprimer le film ?")){
      this.supprimer(index);
    }
  }
}
