import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleByIdComponent } from './people-by-id.component';

describe('PeopleByIdComponent', () => {
  let component: PeopleByIdComponent;
  let fixture: ComponentFixture<PeopleByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
