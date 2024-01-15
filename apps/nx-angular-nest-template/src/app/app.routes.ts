import { Route } from '@angular/router';
import { LoginComponent } from './core/auth/login.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
];
