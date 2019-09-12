import { Component } from '@angular/core';
import { skills } from './data/skills';
import { personalData } from './data/personal';
import { socialMediaSlide } from './animations/load-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    socialMediaSlide
  ]
})
export class AppComponent {
  title = 'profile';
  skills: string[];
  personalData: any;

  constructor() {
    this.skills = skills;
    this.personalData = personalData;
  }
}
