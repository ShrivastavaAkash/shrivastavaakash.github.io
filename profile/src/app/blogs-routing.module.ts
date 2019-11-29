import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent, BlogComponent } from './components/blogs';

const blogsRoutes: Routes = [
  { path: 'blogs',  component: BlogsComponent, data: { animation: 'blogs' } },
  { path: 'blog/:id', component: BlogComponent, data: { animation: 'blog' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogsRoutingModule { }