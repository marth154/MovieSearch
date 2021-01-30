import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  transform(value: number): unknown {
    return null;
  }

}
