import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heure'
})
export class HeurePipe implements PipeTransform {

  heure: number;
  minute: number;

  transform(value: number): string {
    this.heure = Math.trunc(value / 60);
    this.minute = value % 60;

    if(this.minute < 10) {
      return(`${this.heure}h0${this.minute}`);
    }
    else {
      return(`${this.heure}h${this.minute}`);
    }

    
  }

}
