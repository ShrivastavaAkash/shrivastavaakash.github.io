import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { SeoService } from "src/app/services/seo/seo.service";
import { NavService } from "src/app/services/nav/nav.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit, OnDestroy {
  menuOpen: boolean = false;
  themeDark: boolean = false;

  subscriptions: Subscription[] = new Array<Subscription>();

  constructor(private router: Router, private nav: NavService) {
    this.subscriptions.push(
      this.router.events.subscribe(v => {
        window.scrollTo(0, 0);
        this.menuOpen = false;
        this.nav.setDefault();
      })
    );

    this.subscriptions.push(
      nav.bgColorLight$.subscribe(isLight => {
        this.themeDark = !isLight;
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscriptions) this.subscriptions.forEach(v => v.unsubscribe());
  }
}
