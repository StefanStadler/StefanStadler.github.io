import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  mobileMenu: boolean = false;

  triggerNavItem(s: string) {
    console.log('nav')
    // @ts-ignore
    const el: HTMLElement = document.getElementById(s.replace('#', ''));
    if (el) {
      el.scrollIntoView();
    }
  }

  triggerMobileNavItem(s: string) {
    console.log('nav')

  }

  setMobileMenu(b: boolean) {

  }
}
