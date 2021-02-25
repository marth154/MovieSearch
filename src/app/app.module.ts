import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { PeopleComponent } from './people/people.component';
import { SerieComponent } from './serie/serie.component';
import { HeurePipe } from './pipes/heure.pipe';
import { NotePipe } from './pipes/note.pipe';
import { MovieByIdComponent } from './movie-by-id/movie-by-id.component';
import { SerieByIdComponent } from './serie-by-id/serie-by-id.component';
import { PeopleByIdComponent } from './people-by-id/people-by-id.component';
import { MapGenrePipe } from './pipes/map-genre.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { AffichageRechercheComponent } from './affichage-recherche/affichage-recherche.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    PeopleComponent,
    SerieComponent,
    HeurePipe,
    NotePipe,
    MovieByIdComponent,
    SerieByIdComponent,
    PeopleByIdComponent,
    MapGenrePipe,
    SignInComponent,
    AffichageRechercheComponent,
    CommentaireComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AffichageRechercheComponent]
})
export class AppModule { }
