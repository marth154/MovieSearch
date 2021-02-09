import { AllGenres } from './../model/genres.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapGenre'
})
export class MapGenrePipe implements PipeTransform {

  transform(genresMovie, id:number): string {
    return genresMovie[genresMovie.findIndex(genreMovie => genreMovie.id === id)].name
  }

}