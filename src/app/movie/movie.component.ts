
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movies: object;

  pegi18: string = "../../assets/PEGI_18.svg.png";

  constructor() { }

  ngOnInit(): void {

  }
}
