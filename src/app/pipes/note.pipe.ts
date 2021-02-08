import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';  
@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(note: number, maxNote: number): any {

    let starsNoteHtml: string = '';
    let starsMissingHtml: string = '';

    for (let star = 0; star < Math.round(note); star++) {
      starsNoteHtml += `<i class="fas fa-star"></i>`;
    }

    for (let star = 0; star < maxNote - Math.round(note); star++) {
      starsMissingHtml += `<i class="far fa-star"></i>`;
    }

    return this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(`${starsNoteHtml}${starsMissingHtml}`));
  }
}
