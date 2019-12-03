import { Component, OnInit } from '@angular/core';
import { personalData } from 'src/app/data/personal';
import { skills } from 'src/app/data/skills';
import { DomSanitizer } from '@angular/platform-browser';
import { socialMediaSlide } from 'src/app/animations/load-animations';
import { SeoService } from 'src/app/services/seo/seo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    socialMediaSlide
  ]
})
export class HomeComponent implements OnInit {

  personalData: any;
  skills: any[];

  constructor(
    public _sanitizer: DomSanitizer,
    private seo: SeoService
  ) {
    this.personalData = personalData;
    this.skills = skills;
  }

  ngOnInit() {
    this.seo.SetDefaultTitle();
    this.seo.setDefaultMetaData();
  }
}
