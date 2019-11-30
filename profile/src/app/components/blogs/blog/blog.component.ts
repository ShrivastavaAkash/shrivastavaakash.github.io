import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs/blogs.service';
import { MdSourcePipe } from 'src/app/pipes/md-source/md-source.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  @Input() id: string = null;
  blog :any;
  expanded: boolean;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
      private service: BlogsService
    ) {
    }

  ngOnInit() {
    if (this.id == null) {
      this.expanded = true;
      this.route.paramMap
        .subscribe(data => {
          this.id = data.get('id');
          this.getData();
        })
        .unsubscribe();
    }else{
      this.getData();
    }
  }

  getData(){
    this.subscription = this.service.blogs$.subscribe(data => {
      this.blog = data.get(this.id);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
