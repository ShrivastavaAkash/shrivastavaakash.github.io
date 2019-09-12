import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

export const profilePop = trigger('pop', [
    transition(':enter', [
      query('div', [
        style({ transform: 'scale(0)', opacity: 0 }),
        stagger(100, [ animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'scale(1)', opacity: 1 })) ])
      ])
    ])
]);

export const socialMediaSlide = trigger('slide', [
  transition(':enter', [
    query('img', [
      style({ transform: 'translateX(-20%)', opacity: 0 }),
      stagger(100, [ animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(0%)', opacity: 1 })) ])
    ])
  ])
]);