import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menuOpen: boolean = false;
  constructor(private router: Router) {
    router.events.subscribe((v) => {
      this.menuOpen = false;
    });
   }

  ngOnInit() {
  }

}
