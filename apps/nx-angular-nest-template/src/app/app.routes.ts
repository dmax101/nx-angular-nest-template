import { Route } from '@angular/router';
import { LoginComponent } from './core/auth/components/login.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
];
