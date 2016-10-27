import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
// import {HttpModule} from "@angular/http";


import { UserLoginComponent }    from './user-login/user-login.component';
import { UserSignupComponent }  from './user-signup/user-signup.component';

import { AuthService } from './auth.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule

    ],
    declarations: [
        UserLoginComponent,
        UserSignupComponent
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {}
