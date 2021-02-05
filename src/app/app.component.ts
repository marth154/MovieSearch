import { RequestApiSerieService } from './services/request-api-serie.service';
import { RequestApiPeopleService } from './services/request-api-people.service';
import { RequestApiMoviesService } from './services/request-api-movies.service';
import { AllMovies, Movie } from './model/movie.model';
import { AllPeople, People } from './model/people.model';
import { AllSeries, Serie } from './model/series.model';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieSearch';
  searchInput: string;
  searching: string = 'movie';

  movies: Movie[];

  peoples: People[];

  series: Serie[];

  constructor(private requestApiMoviesService: RequestApiMoviesService, 
              private requestApiPeopleService: RequestApiPeopleService,
              private requestApiSerieService: RequestApiSerieService,
              private el: ElementRef) {
  }

  ngOnInit(): void {}

  searchResult() {
    if(this.searching === "movie") {
      this.requestApiMoviesService.findAllMoviesByKeyword(this.searchInput).subscribe(x => this.movies = x.results )
    }
    if (this.searching === "person") {
      this.requestApiPeopleService.findAllPeopleByKeyword(this.searchInput).subscribe(x => this.peoples = x.results )
    }
    if (this.searching === "tv") {
      this.requestApiSerieService.findAllSerieByKeyword(this.searchInput).subscribe(x => this.series = x.results )
    }
  }
}
