import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ThemeService } from '../../shared/services/theme.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'nx-angular-nest-template-login',
  standalone: true,
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  isDarkMode$ = new BehaviorSubject<boolean>(false);
  isDarkModeSubscription!: Subscription;

  loginForm!: FormGroup;

  constructor(
    private themeService: ThemeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });

    this.isDarkModeSubscription = this.themeService.isDarkMode.subscribe(
      (data) => {
        this.isDarkMode$.next(data);
      }
    );
  }

  ngOnDestroy(): void {
    this.isDarkModeSubscription.unsubscribe();
  }

  onSubmit() {
    this.loginForm.reset();
  }
}
