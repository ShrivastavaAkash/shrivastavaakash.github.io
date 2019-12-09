import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { personalData } from './../../data/personal';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor (
    private title: Title,
    private meta: Meta) {

  }

  SetDefaultTitle() {
    this.title.setTitle(personalData.name);
  }

  setDefaultMetaData() {
    this.meta.updateTag({ name: "image", content: personalData.profileImage });
    this.meta.updateTag({ name: "description", content: personalData.description });
    this.meta.updateTag({ name: "url", content: personalData.website });
    this.meta.updateTag({ property: "og:image", content: personalData.profileImage });
    this.meta.updateTag({ property: "og:description", content: personalData.description });
    this.meta.updateTag({ property: "og:url", content: personalData.website });
  }
}
