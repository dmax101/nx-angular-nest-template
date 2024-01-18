import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'nx-angular-nest-template-dark-mode-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-mode-selector.component.html',
  styleUrl: './dark-mode-selector.component.scss',
})
export class DarkModeSelectorComponent implements OnInit, OnDestroy {
  isDarkMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isDarkModeSubscription$!: Subscription;

  constructor(private themeService: ThemeService) {}

  toggleDarkMode() {
    this.themeService.toggleThemeMode();
  }

  ngOnInit(): void {
    this.isDarkModeSubscription$ = this.themeService.isDarkMode.subscribe(
      (data) => {
        this.isDarkMode$.next(data);
      }
    );
  }

  ngOnDestroy(): void {
    this.isDarkModeSubscription$.unsubscribe();
  }
}
