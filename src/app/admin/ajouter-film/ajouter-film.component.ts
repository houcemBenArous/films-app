import { Component } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-film',
  standalone: true,
  imports: [],
  templateUrl: './ajouter-film.component.html',
  styleUrl: './ajouter-film.component.css'
})
export class AjouterFilmComponent {
  constructor(private filmsService : FilmsService , private route : Router){}

  ajouterFilm(nom: string, desc: string) {
    this.filmsService.ajouterFilm(nom, desc);
  
    Swal.fire({
      title: 'Succès!',
      text: 'Film ajouté avec succès !',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      this.route.navigate(['/admin/liste-films']);
    });
  }
}
