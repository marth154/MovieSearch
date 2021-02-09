import { Movie } from '../model/movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { RequestApiGenresService } from './../services/request-api-genres.service';
import { Genre } from '../model/genres.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-by-id',
  templateUrl: './movie-by-id.component.html',
  styleUrls: ['./movie-by-id.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '0px' })),
      transition('false <=> true', [ animate(5000) ])
    ])
  ]
})
export class MovieByIdComponent implements OnInit {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  @Input() movie: Movie;
  
  average : Array<number> = [];
  step: number;
  genresMovie: Genre[];

  constructor(private requestApiGenresService: RequestApiGenresService) { }

  ngOnInit(): void {
    this.requestApiGenresService.findAllGenresMovie().subscribe(x => this.genresMovie = x.genres);
  }
  
}
