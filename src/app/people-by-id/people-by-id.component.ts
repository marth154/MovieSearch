import { People } from './../model/people.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-by-id',
  templateUrl: './people-by-id.component.html',
  styleUrls: ['./people-by-id.component.scss']
})
export class PeopleByIdComponent implements OnInit {
  @Input() people: People;

  constructor() { }

  ngOnInit(): void {
  }

}
