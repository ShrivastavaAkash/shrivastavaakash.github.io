import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { blogs } from './../../data/blog-meta';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  _blogs: BehaviorSubject<Map<string, any>> = new BehaviorSubject<Map<string, any>>(blogs);
  blogs$ = this._blogs.asObservable();
}
