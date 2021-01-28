import { AllMovies, Movie } from './models/movie';
import { RequestApiMoviesService } from './services/request-api-movies.service';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieSearch';
  searchInput: string;
  searching: string;
  movies: Movie[];

  constructor(private requestApiMoviesService: RequestApiMoviesService, private el: ElementRef) {
  }

  ngOnInit(): void {
    
  }

  searchResult() {
    this.requestApiMoviesService.findAllMoviesByKeyword(this.searchInput, this.searching).subscribe(x => this.movies = x.results )
    console.log(this.searching);
  }

  

}
