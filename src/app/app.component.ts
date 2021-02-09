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
  searching = 'movie';
  searchInput: string;
  activeSearch: string;

  movies: Movie[];

  peoples: People[];

  series: Serie[];

  constructor(private requestApiMoviesService: RequestApiMoviesService, 
              private requestApiPeopleService: RequestApiPeopleService,
              private requestApiSerieService: RequestApiSerieService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    this.getPopularMovies();
    this.requestApiSerieService.getPopularSeries().subscribe((series: Serie[]) => this.series = series);
    this.requestApiPeopleService.getPopularPeople().subscribe((peoples: People[]) => this.peoples = peoples);
  }

  searchResult() {
    this.activeSearch = "";
    if(this.searching === "movie") {
      this.requestApiMoviesService.findAllMoviesByKeyword(this.searchInput).subscribe((movies: Movie[]) => this.movies = movies)
    }
    if (this.searching === "person") {
      this.requestApiPeopleService.findAllPeopleByKeyword(this.searchInput).subscribe((peoples: People[]) => this.peoples = peoples)
    }
    if (this.searching === "tv") {
      this.requestApiSerieService.findAllSerieByKeyword(this.searchInput).subscribe((series: Serie[]) => this.series = series)
    }
  }

  getPopularMovies() {
    this.searching = "movie";
    this.activeSearch = "popularMovies";
    this.requestApiMoviesService.getPopularMovies().subscribe((movies: Movie[]) => this.movies = movies)
  }

  getTopRatedMovies() {
    this.searching = "movie";
    this.activeSearch = "topRatedMovies";
    this.requestApiMoviesService.getTopRatedMovies().subscribe((movies: Movie[]) => this.movies = movies)
  }

  getNowMovies() {
    this.searching = "movie";
    this.activeSearch = "nowMovies";
    this.requestApiMoviesService.getNowMovies().subscribe((movies: Movie[]) => this.movies = movies)
  }

  getUpcomingMovies() {
    this.searching = "movie";
    this.activeSearch = "upcomingMovies";
    this.requestApiMoviesService.getUpcomingMovies().subscribe((movies: Movie[]) => this.movies = movies)
  }

  getPopularSeries() {
    this.searching = "tv";
    this.activeSearch = "popularSeries";
    this.requestApiSerieService.getPopularSeries().subscribe((series: Serie[]) => this.series = series)
  }

  getTopRatedSeries() {
    this.searching = "tv";
    this.activeSearch = "topRatedSeries";
    this.requestApiSerieService.getTopRatedSeries().subscribe((series: Serie[]) => this.series = series)
  }

  getAiringTodaySeries() {
    this.searching = "tv";
    this.activeSearch = "airingTodaySeries";
    this.requestApiSerieService.getAiringTodaySeries().subscribe((series: Serie[]) => this.series = series)
  }

  getAiringNowSeries() {
    this.searching = "tv";
    this.activeSearch = "airingNowSeries";
    this.requestApiSerieService.getAiringNowSeries().subscribe((series: Serie[]) => this.series = series)
  }

  getPopularPeoples() {
    this.searching = "person";
    this.activeSearch = "popularPeoples";
    this.requestApiPeopleService.getPopularPeople().subscribe((peoples: People[]) => this.peoples = peoples)
  }
}
