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
  
  constructor(private requestApiPeopleService: RequestApiPeopleService) { }

  ngOnInit(): void {
  }

  IsClick(id:number) {
    this.requestApiPeopleService.findPeopleById(id).subscribe(people => {this.peopleById = people;});
  }  

  openModalInformation(id:number) {
    this.requestApiPeopleService.findPeopleById(id).subscribe(people => {this.peopleById = people;});
    let modal = document.getElementById("myModal");
    modal.style.display = "flex";
    document.body.style.overflowY = "hidden"
  }
  
  closeModalInformation() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.body.style.overflowY = "initial"
  }

}
