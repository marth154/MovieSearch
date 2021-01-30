import { Movie } from './../models/movie.model';
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

  constructor(private requestApiMoviesService: RequestApiMoviesService) { }

  ngOnInit(): void {
    
  }

  IsClick(id:number) {
    this.requestApiMoviesService.findMoviesById(id).subscribe(movie => {this.movieById = movie;});
  }  
}
