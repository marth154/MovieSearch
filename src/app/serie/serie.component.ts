import { RequestApiSerieService } from './../services/request-api-serie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Genre, Serie } from '../model/series.model';
import { RequestApiMoviesService } from '../services/request-api-movies.service';
import { RequestApiGenresService } from '../services/request-api-genres.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  @Input() series: object;

  serieById: Serie;
  genresSerie: Genre[];

  pegi18: string = "../../assets/PEGI_18.svg.png";

  constructor(private requestApiGenresService: RequestApiGenresService, private requestApiSerieService: RequestApiSerieService) { }

  ngOnInit(): void {
    this.requestApiGenresService.findAllGenresSeries().subscribe(genresSerie => {this.genresSerie = genresSerie.genres;});
  }

  openModalInformation(id:number) {
    this.requestApiSerieService.findSerieById(id).subscribe(serie => {this.serieById = serie;});
    let modal = document.getElementById("myModal");
    modal.style.display = "flex";
    document.body.style.overflowY = "hidden"
  }
  
  closeModalInformation() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.body.style.overflowY = "initial"
  }

  searchByGenre(id: number) {
    this.requestApiSerieService.findSerieByGenre(id).subscribe(x => this.series = x.results)
  }

}
