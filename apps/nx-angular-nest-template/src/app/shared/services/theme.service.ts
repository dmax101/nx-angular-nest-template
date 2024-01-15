import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  isDarkMode = this._darkMode.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  isDarkTheme(): boolean {
    const body = this.document.body;
    const theme = body.getAttribute('data-theme');

    return theme === 'light' ? false : true;
  }

  setDarkMode(DarkMode: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      this._darkMode.next(DarkMode);
      const body = document.body;
      body.setAttribute('data-theme', DarkMode ? 'dark' : 'light');
    }
  }

  toggleTheme() {
    console.log('toggle theme');
    if (isPlatformBrowser(this.platformId)) {
      this._darkMode.next(!this.isDarkTheme());
      this.setDarkMode(!this.isDarkTheme());
    }
  }
}
