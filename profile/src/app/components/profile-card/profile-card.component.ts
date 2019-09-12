import { Component, OnInit } from '@angular/core';
import { links } from '../../data/socia-media-links'; 
import { personalData } from './../../data/personal';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  animations: [
    trigger('pop', [
      transition(':enter', [
        query('div', [
          style({ transform: 'scale(0)', opacity: 0 }),
          stagger(100, [ animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'scale(1)', opacity: 1 })) ])
        ])
      ])
    ])
  ]
})
export class ProfileCardComponent implements OnInit {

  img: string  = "https://s.cdpn.io/profiles/user/805918/512.jpg?100000";
  links: any[] = links;
  personalData: any;
  constructor() { }

  ngOnInit() {
    this.personalData = personalData;
  }

}
