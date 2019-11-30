import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  
  blogs: string[];
  
  constructor(private service: BlogsService) { }

  ngOnInit() {
    this.service.blogs$.subscribe(
      map => {
        console.log(map);
        this.blogs = Array.from(map.keys());
      }
    )
  }
}
