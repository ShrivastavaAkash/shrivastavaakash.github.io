import {
    trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
  
  
  // Routable animations
  export const slideInAnimation =
    trigger('routeAnimation', [
      transition('blogs <=> blog', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
              position: 'absolute',
              transform: 'translate(-50%)',
              left: '50%',
              display: 'block',
              width: '60%',
              opacity: 0,
              paddingTop: '3rem'
            })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('200ms ease', style({ 
                background: 'red'
             }))
          ]),
          query(':enter', [
            animate('500ms ease', style({ 
                opacity: 1,
                paddingTop: '0px',
                width: '100%'
            }))
          ])
        ]),
        query(':enter', animateChild()),
      ])
    ]);