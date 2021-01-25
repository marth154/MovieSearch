import { AllMovies, Movie } from './models/movie';
import { RequestApiMoviesService } from './services/request-api-movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieSearch';
  searchInput: string;
  movies: Movie[];

  constructor(private requestApiMoviesService: RequestApiMoviesService) {
  }

  searchResult() {
    this.requestApiMoviesService.findAllMoviesByKeyword(this.searchInput).subscribe(x => this.movies = x.results )
  }

}
