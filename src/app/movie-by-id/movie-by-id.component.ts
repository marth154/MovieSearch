import { Movie } from '../model/movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { RequestApiGenresService } from './../services/request-api-genres.service';
import { Genre } from '../model/genres.model';

@Component({
  selector: 'app-movie-by-id',
  templateUrl: './movie-by-id.component.html',
  styleUrls: ['./movie-by-id.component.scss']
})
export class MovieByIdComponent implements OnInit {

  @Input() movie: Movie;
  
  average : Array<number> = [];
  step: number;
  genresMovie: Genre[];

  constructor(private requestApiGenresService: RequestApiGenresService) { }

  ngOnInit(): void {
    this.requestApiGenresService.findAllGenresMovie().subscribe((genresMovie: Genre[]) => this.genresMovie = genresMovie);
  }
  
}
