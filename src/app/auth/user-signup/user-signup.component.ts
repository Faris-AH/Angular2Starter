import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../models/user';


@Component({
    selector: 'user-signup',
    styleUrls: ['./user-signup.component.css'],
    templateUrl: './user-signup.component.html'
})
export class UserSignupComponent {
    user = new User("jhon","john@gmail.com","123");

    constructor(private router:Router) {

    }

    goToHome() {
        this.router.navigate(['/home']);
    }

    onSignup(){
        console.log(this.user);
    }
}
