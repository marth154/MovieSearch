import { Genre } from './../model/series.model';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mapGenre'
})
export class MapGenrePipe implements PipeTransform {

  transform(genresMovie: Genre[], id:number): string {
    return genresMovie[genresMovie.findIndex(genreMovie => genreMovie.id === id)].name
  }

}