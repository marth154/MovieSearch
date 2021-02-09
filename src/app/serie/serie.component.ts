import { RequestApiSerieService } from './../services/request-api-serie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Genre, Serie } from '../model/series.model';
import { RequestApiMoviesService } from '../services/request-api-movies.service';
import { RequestApiGenresService } from '../services/request-api-genres.service';
import { OpenCloseTransition } from '../transitions/open-close';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss'],
  animations: [OpenCloseTransition]
})
export class SerieComponent implements OnInit {

  @Input() series: object;

  serieById: Serie;
  genresSerie: Genre[];
  isOpen = false;

  pegi18: string = "../../assets/PEGI_18.svg.png";

  toggle() {
    this.isOpen = !this.isOpen
    document.body.style.overflowY = this.isOpen ? 'hidden' : 'initial';
  }

  constructor(private requestApiGenresService: RequestApiGenresService, private requestApiSerieService: RequestApiSerieService) { }

  ngOnInit(): void {
    this.requestApiGenresService.findAllGenresSeries().subscribe((genresSerie: Genre[]) => this.genresSerie = genresSerie);
  }

  openModalInformation(id:number) {
    this.requestApiSerieService.findSerieById(id).subscribe((serie: Serie) => this.serieById = serie);
    this.toggle();
  }
  
  closeModalInformation() {
    this.toggle();
  }

}
