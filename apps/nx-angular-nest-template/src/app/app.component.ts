import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LoginComponent } from './core/auth/components/login.component';
import { ThemeService } from './shared/services/theme.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LoginComponent],
  selector: 'nx-angular-nest-template-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'nx-angular-nest-template';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.updateSysTheme();
  }
}
