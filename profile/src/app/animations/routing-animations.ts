import {
    trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
  
  
  // Routable animations
  export const slideInAnimation =
    trigger('routeAnimation', [
      transition('blogs <=> blog', [
        query(':enter, :leave', [
          style({
              position: 'absolute',
              transform: 'translateX(-50%)',
              left: '50%',
              display: 'block',
              width: '60%',
              opacity: 0,
              top: "0px"
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
            animate('300ms ease', style({ 
                opacity: 1,
                paddingTop: '0px',
                width: '100%'
            }))
          ])
        ]),
        query(':enter', animateChild()),
      ])
    ]);