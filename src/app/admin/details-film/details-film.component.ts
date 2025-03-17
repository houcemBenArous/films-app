import { Component } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details-film',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details-film.component.html',
  styleUrl: './details-film.component.css'
})
export class DetailsFilmComponent {
nomFilm : string = "";
descFilm : string = "";

constructor(private filmsService : FilmsService, private route : ActivatedRoute) {}

ngOnInit(){
  const id = this.route.snapshot.params['id'];
  this.nomFilm = this.filmsService.getFilmParId(+id).nom + this.nomFilm;
  this.descFilm = this.filmsService.getFilmParId(+id).description + this.descFilm;
}
}
