import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';  
@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(note: number, maxNote: number): any {

    let starsNoteHtml: string = '';

    for (let index = 0; index < maxNote; index++) {
      starsNoteHtml += index < Math.round(note) ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
    }

    return this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(starsNoteHtml));
  }
}
