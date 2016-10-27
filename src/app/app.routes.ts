import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserLoginComponent} from './auth/user-login/user-login.component';
import {UserSignupComponent} from './auth/user-signup/user-signup.component';


export const rootRouterConfig: Routes = [
    {path: 'user-signup', component: UserSignupComponent},
    {path: 'user-login', component: UserLoginComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

