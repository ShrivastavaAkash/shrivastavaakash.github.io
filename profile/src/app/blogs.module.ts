import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BlogComponent, BlogsComponent } from './components/blogs';

import { BlogsRoutingModule } from './blogs-routing.module';

@NgModule({
  declarations: [
    BlogsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BlogsRoutingModule,
    BrowserAnimationsModule
  ]
})
export class BlogsModule { }
