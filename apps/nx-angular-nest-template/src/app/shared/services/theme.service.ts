import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.localStorageService.get('theme') === 'dark'
  );

  isDarkMode = this._darkMode.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  setLightMode() {
    this.localStorageService.set('theme', 'light');
    this.document.documentElement.classList.remove('dark');
    this._darkMode.next(false);
  }

  setDarkMode() {
    this.localStorageService.set('theme', 'dark');
    this.document.documentElement.classList.add('dark');
    this._darkMode.next(true);
  }

  toggleThemeMode() {
    this.localStorageService.get('theme') === 'dark'
      ? this.setLightMode()
      : this.setDarkMode();
  }

  setSystemMode() {
    if (this.localStorageService.get('sysTheme') === 'dark') {
      this.document.documentElement.classList.add('dark');
      this._darkMode.next(true);
    } else {
      this.document.documentElement.classList.remove('dark');
      this._darkMode.next(false);
    }
  }

  async updateSysTheme() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    const self = '.';
    this.router.navigate([self]);
  }
}
