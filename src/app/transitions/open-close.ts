import { animate, style, transition, trigger } from '@angular/animations';

export const OpenCloseTransition = [
    trigger('openClose', [
      transition(':enter', [
        style({transform: 'scale3d(.3, .3, .3)'}),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]