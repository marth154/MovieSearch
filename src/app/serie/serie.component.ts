import { RequestApiSerieService } from './../services/request-api-serie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../model/series.model';
import { RequestApiGenresService } from '../services/request-api-genres.service';
import { OpenCloseTransition } from '../transitions/open-close';
import { Genre } from '../model/genres.model';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss'],
  animations: [OpenCloseTransition]
})
export class SerieComponent implements OnInit {

  @Input() series: Serie[];

  serieById: Serie;
  genresSerie: Genre[];
  isOpen = false;

  constructor(private requestApiGenresService: RequestApiGenresService, private requestApiSerieService: RequestApiSerieService) { }

  ngOnInit(): void {
    this.requestApiGenresService.findAllGenresSeries().subscribe(x => this.genresSerie = x.genres);
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    document.body.style.overflowY = this.isOpen ? 'hidden' : 'initial';
  }

  openModalInformation(id: number): void {
    this.requestApiSerieService.findSerieById(id).subscribe((serie: Serie) => this.serieById = serie);
    this.toggle();
  }

  closeModalInformation(): void {
    this.toggle();
  }

  searchByGenre(id: number): void {
    this.requestApiSerieService.findSerieByGenre(id).subscribe(x => this.series = x.results);
  }
}
