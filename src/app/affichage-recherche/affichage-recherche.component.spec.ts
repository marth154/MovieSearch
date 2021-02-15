import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageRechercheComponent } from './affichage-recherche.component';

describe('AffichageRechercheComponent', () => {
  let component: AffichageRechercheComponent;
  let fixture: ComponentFixture<AffichageRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
