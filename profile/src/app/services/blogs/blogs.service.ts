import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { blogs } from "./../../data/blog-meta";

@Injectable({
  providedIn: "root"
})
export class BlogsService {
  _blogs: BehaviorSubject<Map<string, any>> = new BehaviorSubject<
    Map<string, any>
  >(blogs);
  blogs$ = this._blogs.asObservable();

  _allTags: BehaviorSubject<Set<string>> = new BehaviorSubject<Set<string>>(
    this.getAllTags()
  );
  allTags$ = this._allTags.asObservable();

  setTagsFilter(tags: string[]) {
    this._blogs.next(
      new Map(
        Array.from(blogs.entries())
          .filter(v => tags.every(t => v[1].tags.includes(t)))
          .sort((a, b) => (new Date(a[1].date) < new Date(b[1].date) ? 1 : -1))
      )
    );

    this._allTags.next(this.getAllTags());
  }

  getAllTags(): Set<string> {
    return new Set(
      Array.from(blogs.values())
        .map(v => v.tags)
        .flat(Infinity)
    );
  }
}
