import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  @Input() series: object;

  constructor() { }

  ngOnInit(): void {
  }

}
