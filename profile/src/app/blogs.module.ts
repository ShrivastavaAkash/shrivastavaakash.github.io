import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BlogComponent, BlogsComponent } from './components/blogs';
import { MarkdownModule } from 'ngx-markdown';

import { BlogsRoutingModule } from './blogs-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MdSourcePipe } from './pipes/md-source/md-source.pipe';

@NgModule({
  declarations: [
    BlogsComponent,
    BlogComponent,
    MdSourcePipe
  ],
  imports: [
    BrowserModule,
    BlogsRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ]
})
export class BlogsModule { }
