import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'nx-angular-nest-template-login',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  isDarkMode$ = new BehaviorSubject<boolean>(false);
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkMode.subscribe((data) => {
      this.isDarkMode$.next(data);
    });
  }
}
