import { RequestApiSerieService } from './../services/request-api-serie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../model/series.model';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  @Input() series: object;

  serieById: Serie;

  pegi18: string = "../../assets/PEGI_18.svg.png";

  constructor(private requestApiSerieService: RequestApiSerieService) { }

  ngOnInit(): void {
  }

  IsClick(id:number) {
    this.requestApiSerieService.findSerieById(id).subscribe(serie => {this.serieById = serie;});
  }  

}
