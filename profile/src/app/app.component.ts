import { Component } from '@angular/core';
import { skills } from './data/skills';
import { personalData } from './data/personal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile';
  skills: string[] = skills;
  personalData: any;

  constructor() {
    this.personalData = personalData;
  }
}
