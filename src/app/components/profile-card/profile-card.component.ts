import { Component, OnInit } from '@angular/core';
import { links } from './socia-media-links'; 

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  img: string  = "https://s.cdpn.io/profiles/user/805918/512.jpg?100000";
  links: any[] = links;
  constructor() { }

  ngOnInit() {
  }

}
