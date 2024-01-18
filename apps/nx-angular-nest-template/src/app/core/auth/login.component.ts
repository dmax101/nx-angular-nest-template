import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'nx-angular-nest-template-login',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  isDarkMode$ = new BehaviorSubject<boolean>(false);
  isDarkModeSubscription!: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkModeSubscription = this.themeService.isDarkMode.subscribe(
      (data) => {
        this.isDarkMode$.next(data);
      }
    );
  }

  ngOnDestroy(): void {
    this.isDarkModeSubscription.unsubscribe();
  }
}
