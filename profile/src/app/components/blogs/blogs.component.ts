import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs/blogs.service';
import { Meta, Title } from '@angular/platform-browser';
import { personalData } from './../../data/personal';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  
  blogs: string[];
  
  constructor (
    private service: BlogsService,
    private title: Title,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.service.blogs$.subscribe(
      map => {
        console.log(map);
        this.blogs = Array.from(map.keys());
      }
    );

    this.title.setTitle( personalData.name + " | Blog");
    this.seo.setDefaultMetaData();
  }
}
