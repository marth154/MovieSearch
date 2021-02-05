import { Genre } from './../model/series.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapGenre'
})
export class MapGenrePipe implements PipeTransform {

  transform(genresMovie, id:number): string {
    let genreMovieName: string;
    genresMovie.map(genreMovie => { 
      if(genreMovie.id === id) { 
        genreMovieName = genreMovie.name
      }
    })
    return genreMovieName;
  }

}
