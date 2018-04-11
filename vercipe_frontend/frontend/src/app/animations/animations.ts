import { trigger, animate, transition, state, style, group } from '@angular/animations';

export let easeIn = trigger('easeIn', [
    state('in', style({height: '*', opacity: 0})),
    transition('void => *', [
      style({height: '0', opacity: 0}),
      animate('600ms ease-in', style({'opacity': '1'}))
    ])
]);
