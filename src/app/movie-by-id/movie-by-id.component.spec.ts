import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieByIdComponent } from './movie-by-id.component';

describe('MovieByIdComponent', () => {
  let component: MovieByIdComponent;
  let fixture: ComponentFixture<MovieByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
