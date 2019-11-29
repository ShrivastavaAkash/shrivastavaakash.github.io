import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  Blogs: Map<string, any> = new Map<string, any> ( [
    ["first-blog", {
      img: "https://i.pinimg.com/originals/b6/0b/1c/b60b1c17b93fe95747ecf0309fae2737.jpg",
      title: "Loading assemblies on runtime"
    }],
    ["second-blog", {
      img: "https://upload.wikimedia.org/wikipedia/commons/1/12/LFH_2_640px.jpg",
      title: "Loading assemblies on runtime"
    }],
    ["third-blog", {
      img: "https://upload.wikimedia.org/wikipedia/commons/1/12/LFH_2_640px.jpg",
      title: "Loading assemblies on runtime"
    }],
    ["fourth-blog", {
      img: "https://upload.wikimedia.org/wikipedia/commons/1/12/LFH_2_640px.jpg",
      title: "Loading assemblies on runtime"
    }],
    ["fifth-blog", {
      img: "https://upload.wikimedia.org/wikipedia/commons/1/12/LFH_2_640px.jpg",
      title: "Loading assemblies on runtime"
    }],
    ["sixth-blog", {
      img: "https://upload.wikimedia.org/wikipedia/commons/1/12/LFH_2_640px.jpg",
      title: "Loading assemblies on runtime"
    }]
  ]);

  getBlog :any = (id :string) => 
    this.Blogs.get(id);
}
