import { Genre } from './../model/series.model';
import { RequestApiGenresService } from './../services/request-api-genres.service';
import { Movie } from '../model/movie.model';
import { RequestApiMoviesService } from './../services/request-api-movies.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movies: object;

  pegi18: string = "../../assets/PEGI_18.svg.png";

  movieById: Movie;
  genresMovie: Genre[];

  constructor(private requestApiMoviesService: RequestApiMoviesService, private requestApiGenresService: RequestApiGenresService ) { }

  ngOnInit(): void {
    this.requestApiGenresService.findAllGenresMovie().subscribe(genresMovie => {this.genresMovie = genresMovie.genres;});
  }

  openModalInformation(id:number) {
    this.requestApiMoviesService.findMoviesById(id).subscribe(movie => {this.movieById = movie;});
    
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
  }
  
  closeModalInformation() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

}
