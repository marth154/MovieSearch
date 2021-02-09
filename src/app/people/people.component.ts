import { RequestApiPeopleService } from './../services/request-api-people.service';
import { People } from './../model/people.model';
import { Component, Input, OnInit } from '@angular/core';
import { OpenCloseTransition } from '../transitions/open-close';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  animations: [OpenCloseTransition]
})
export class PeopleComponent implements OnInit {

  @Input() peoples: object;

  peopleById: People;
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen
    document.body.style.overflowY = this.isOpen ? 'hidden' : 'initial';
  }

  constructor(private requestApiPeopleService: RequestApiPeopleService) { }

  ngOnInit(): void {
  }

  openModalInformation(id:number) {
    this.requestApiPeopleService.findPeopleById(id).subscribe((people: People) => this.peopleById = people);
    this.toggle()
  }
  
  closeModalInformation() {
    this.toggle()
  }

}
