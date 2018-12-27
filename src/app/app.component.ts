import { Component } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  active = "";

  activateClass(activeclass: any) {
      this.active = activeclass;
   }
}
