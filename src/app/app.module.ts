import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { PeopleComponent } from './people/people.component';
import { SerieComponent } from './serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    PeopleComponent,
    SerieComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
