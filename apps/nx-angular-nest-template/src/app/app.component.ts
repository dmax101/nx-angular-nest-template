import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LoginComponent } from './core/auth/login.component';
import { ThemeService } from './shared/services/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LoginComponent],
  selector: 'nx-angular-nest-template-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'nx-angular-nest-template';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    const body = this.document.body;
    const theme = body.getAttribute('data-theme');

    theme === 'light'
      ? this.themeService.setDarkMode(false)
      : this.themeService.setDarkMode(true);
  }
}
