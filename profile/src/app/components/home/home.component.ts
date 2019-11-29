import { Component } from '@angular/core';
import { personalData } from 'src/app/data/personal';
import { skills } from 'src/app/data/skills';
import { DomSanitizer } from '@angular/platform-browser';
import { socialMediaSlide } from 'src/app/animations/load-animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    socialMediaSlide
  ]
})
export class HomeComponent {

  personalData: any;
  skills: any[];

  constructor(
    public _sanitizer: DomSanitizer
  ) {
    this.personalData = personalData;
    this.skills = skills;
  }
}
