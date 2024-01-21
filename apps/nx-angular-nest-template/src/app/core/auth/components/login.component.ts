import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { BehaviorSubject, Subscription, catchError, throwError } from 'rxjs';
import { ThemeService } from '../../../shared/services/theme.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'nx-angular-nest-template-login',
  standalone: true,
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  isDarkMode$ = new BehaviorSubject<boolean>(false);
  isDarkModeSubscription!: Subscription;

  loginForm!: FormGroup;

  isLoading: boolean = false;

  errorMessage = {
    hidden: true,
    message: '',
  };

  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
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
    this.isLoading = true;

    this.authService
      .login(this.loginForm.value)
      .pipe(
        catchError((error) => {
          if (error.status === 401) {
            this.errorMessage.message = error.statusText;
            this.errorMessage.hidden = false;
            this.isLoading = false;
          }

          setTimeout(() => {
            this.errorMessage.hidden = true;
          }, 6000);

          return throwError(() => error);
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.loginForm.reset();
      });
  }
}
