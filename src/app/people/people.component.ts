import { RequestApiPeopleService } from './../services/request-api-people.service';
import { People } from './../model/people.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @Input() peoples: object;

  peopleById: People;
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen
    if (this.isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';
    }
  }

  constructor(private requestApiPeopleService: RequestApiPeopleService) { }

  ngOnInit(): void {
  }

  IsClick(id:number) {
    this.requestApiPeopleService.findPeopleById(id).subscribe(people => {this.peopleById = people;});
  }  

  openModalInformation(id:number) {
    this.requestApiPeopleService.findPeopleById(id).subscribe(people => {this.peopleById = people;});
    this.toggle()
  }
  
  closeModalInformation() {
    this.toggle()
  }

}
