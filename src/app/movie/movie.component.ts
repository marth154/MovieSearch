import { OpenCloseTransition } from './../transitions/open-close';
import { Genre } from './../model/series.model';
import { RequestApiGenresService } from './../services/request-api-genres.service';
import { Movie } from '../model/movie.model';
import { RequestApiMoviesService } from './../services/request-api-movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  animations: [OpenCloseTransition]
})
export class MovieComponent implements OnInit {

  @Input() movies: object;

  pegi18: string = "../../assets/PEGI_18.svg.png";

  movieById: Movie;
  genresMovie: Genre[];
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen
    document.body.style.overflowY = this.isOpen ? 'hidden' : 'initial';
  }

  constructor(private requestApiMoviesService: RequestApiMoviesService, private requestApiGenresService: RequestApiGenresService ) { }

  ngOnInit(): void {
    this.requestApiGenresService.findAllGenresMovie().subscribe((genresMovie: Genre[]) => this.genresMovie = genresMovie);
  }

  openModalInformation(id: number) {
    this.requestApiMoviesService.findMoviesById(id).subscribe((movie: Movie) => this.movieById = movie);
    this.toggle()
  }
  
  closeModalInformation() {
    this.toggle()
  }

  searchByGenre(id: number) {
    this.requestApiMoviesService.findMovieByGenre(id).subscribe(x => this.movies = x.results)
  }

}