import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lightMode: boolean = false;

  //change light/dark mode - from nav child component
  toggle(bool: boolean) {
    this.lightMode = bool;
    this.lightMode ? this.renderer.addClass(document.body, 'light-theme') : this.renderer.removeClass(document.body, 'light-theme');;
  }

  constructor(private renderer: Renderer2) {
  }

}
