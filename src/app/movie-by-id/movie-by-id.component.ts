import { Movie } from '../model/movie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-by-id',
  templateUrl: './movie-by-id.component.html',
  styleUrls: ['./movie-by-id.component.scss']
})
export class MovieByIdComponent implements OnInit {

  @Input() movie: Movie;
  
  average : Array<number> = [];
  step: number;

  constructor() { }

  ngOnInit(): void {

    for (let pas = 1; pas < this.movie.vote_average; pas++) {
      this.average.push(pas);
      //this.step = pas;
    }
    //this.average.push(this.movieById.vote_average - this.step);
  }
  
}
