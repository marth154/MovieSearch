import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../model/series.model';

@Component({
  selector: 'app-serie-by-id',
  templateUrl: './serie-by-id.component.html',
  styleUrls: ['./serie-by-id.component.scss']
})
export class SerieByIdComponent implements OnInit {

  @Input() serie: Serie;

  constructor() { }

  ngOnInit(): void {
  }

}
