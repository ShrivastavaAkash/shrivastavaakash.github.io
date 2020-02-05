import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NavService {
  _bgColorLight: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  bgColorLight$ = this._bgColorLight.asObservable();
  constructor() {}

  setLight() {
    this._bgColorLight.next(true);
  }

  setDark() {
    this._bgColorLight.next(false);
  }

  setDefault = this.setLight;

  updateColor(color: string) {
    this.isDark(color) ? this.setDark() : this.setLight();
  }

  isDark = (c: string) => {
    c = c.substring(1); // strip #
    var rgb = parseInt(c, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >> 8) & 0xff; // extract green
    var b = (rgb >> 0) & 0xff; // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma < 60;
  };
}
