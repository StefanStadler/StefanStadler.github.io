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
    // @ts-ignore
    const el: HTMLElement = document.getElementById(s.replace('#', ''));
    if (el) {
      el.scrollIntoView();
    }
  }

  triggerMobileNavItem(s: string) {
    // @ts-ignore
    const el: HTMLElement = document.getElementById(s.replace('#', ''));
    if (el) {
      el.scrollIntoView();
    }
    this.mobileMenu = false;
    this.setMobileNavClass();
  }

  setMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
    this.setMobileNavClass();
  }

  private setMobileNavClass() {
    // @ts-ignore
    const el: HTMLElement = document.getElementById('mobileNav');
    // @ts-ignore
    const contentEl: HTMLElement = document.getElementById('content');

    if (this.mobileMenu) {
      el.classList.remove("hidden");
      contentEl.classList.add("blur");
    } else {
      el.classList.add("hidden");
      contentEl.classList.remove("blur");
    }
  }
}
