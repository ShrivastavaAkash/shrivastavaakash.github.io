import { Component, OnInit } from "@angular/core";
import { BlogsService } from "src/app/services/blogs/blogs.service";
import { Title } from "@angular/platform-browser";
import { personalData } from "./../../data/personal";
import { SeoService } from "src/app/services/seo/seo.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.scss"]
})
export class BlogsComponent implements OnInit {
  blogs: string[];
  tags: string[] = [];
  allTags: Map<string, boolean>;

  constructor(
    private service: BlogsService,
    private title: Title,
    private seo: SeoService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(data => {
      if (data.has("tags")) {
        this.tags = data.get("tags").split("+");
      } else {
        this.tags = [];
      }
      this.service.setTagsFilter(this.tags);
    });
  }

  ngOnInit() {
    this.service.blogs$.subscribe(map => {
      this.blogs = Array.from(map.keys());
    });

    this.service.allTags$.subscribe(set => {
      this.allTags = new Map(
        Array.from(set).map(v => [v, this.tags.includes(v)])
      );
    });

    this.title.setTitle(personalData.name + " | Blog");
    this.seo.setDefaultMetaData();
  }

  addTagParams = (tag: string): string =>
    Array.from(new Set((this.tags || []).concat(tag))).join("+");

  removeTagParams = (tag: string): string =>
    Array.from(new Set((this.tags || []).filter(v => v != tag))).join("+");
}
