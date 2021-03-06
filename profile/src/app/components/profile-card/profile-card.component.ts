import { Component, OnInit } from '@angular/core';
import { links } from '../../data/socia-media-links'; 
import { personalData } from './../../data/personal';
import { profilePop } from '../../animations/load-animations';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  animations: [ profilePop ]
})
export class ProfileCardComponent implements OnInit {
  links: any[];
  personalData: any;
  constructor() { }

  ngOnInit() {
    this.links = links;
    this.personalData = personalData;
  }

  getExperience = (date: Date) => ((new Date().valueOf() - personalData.workingSince.valueOf()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)
}
