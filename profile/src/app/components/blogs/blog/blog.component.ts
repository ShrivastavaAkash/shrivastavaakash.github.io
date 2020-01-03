import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs/blogs.service';
import { MdSourcePipe } from 'src/app/pipes/md-source/md-source.pipe';
import { Subscription } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { personalData } from 'src/app/data/personal';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() id: string = null;
  blog :any;
  expanded: boolean;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
      private router: Router,
      private service: BlogsService,
      private meta: Meta,
      private title: Title
    ) {
    }

  ngOnInit() {
    if (this.id == null) {
      this.expanded = true;
      this.route.paramMap
        .subscribe(data => {
          this.id = data.get('id');
          this.getData();
          this.title.setTitle(this.blog.title);
          this.meta.updateTag({ name: "image", content: this.blog.image });
          this.meta.updateTag({ name: "description", content: this.blog.description });
          this.meta.updateTag({ name: "title", content: this.blog.title });
          this.meta.updateTag({ name: "url", content: this.router.url });
          this.meta.updateTag({ property: "og:image", content: this.blog.image });
          this.meta.updateTag({ property: "og:description", content: this.blog.description });
          this.meta.updateTag({ property: "og:title", content: this.blog.title });
          this.meta.updateTag({ name: "og:url", content: this.router.url });
        })
        .unsubscribe();
    } else {
      this.getData();
    }
  }

  ngAfterViewInit() {
    // reparse - comments plugin
    FB.XFBML.parse(); 
  }

  getData(){
    this.subscription = this.service.blogs$.subscribe(data => {
      this.blog = data.get(this.id);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getFacebookCommentsLink() {
    return window.location.href;
  }
}
