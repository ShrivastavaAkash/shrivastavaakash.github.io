import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs/blogs.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() id: string = null;
  blog :any;
  expanded: boolean;

  constructor(private route: ActivatedRoute,
      private service: BlogsService
    ) { }

  ngOnInit() {
      if(this.id != null) {
        
        this.blog = this.service.getBlog(this.id);
      } else { 
        this.expanded = true;
        this.route.paramMap
          .subscribe(data => {
            this.blog = this.service.getBlog(data.get('id'));
          })
          .unsubscribe();
      }
  }
}
