import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ProfileCardComponent } from "./components/profile-card/profile-card.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HomeComponent } from "./components/home/home.component";

import { AppRoutingModule } from "./app-routing.module";
import { BlogsModule } from "./blogs.module";

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
