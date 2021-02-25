import { RequestApiPeopleService } from './../services/request-api-people.service';
import { People } from './../model/people.model';
import { Component, Input, OnInit } from '@angular/core';
import { OpenCloseTransition } from '../transitions/open-close';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  animations: [OpenCloseTransition]
})
export class PeopleComponent implements OnInit {
  @Input() peoples: People[];

  peopleById: People;
  isOpen = false;

  constructor(private requestApiPeopleService: RequestApiPeopleService) { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    document.body.style.overflowY = this.isOpen ? 'hidden' : 'initial';
  }

  openModalInformation(id: number): void {
    this.requestApiPeopleService.findPeopleById(id).subscribe((people: People) => this.peopleById = people);
    this.toggle();
  }

  closeModalInformation(): void {
    this.toggle();
  }

}
