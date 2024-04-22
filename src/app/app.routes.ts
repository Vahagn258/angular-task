import { Routes } from '@angular/router';
import { SignInComponent } from '@pages/sign-in/sign-in.component';
import { SystemComponent } from '@pages/system/system.component';
import { authGuard } from './guards';

export const routes: Routes = [
  {
    path: '', redirectTo: 'sign-in', pathMatch: 'full'
  },
  {
    path: 'sign-in', component: SignInComponent,
    canActivate: [authGuard(false)]
  },
  {
    path: 'system', component: SystemComponent,
    canActivate: [authGuard(true)]
  }
];
