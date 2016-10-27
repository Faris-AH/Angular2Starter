import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../models/user';

@Component({
    selector: 'user-login',
    styleUrls: ['./user-login.component.css'],
    templateUrl: './user-login.component.html'
})
export class UserLoginComponent {
    user = new User("","john@gmail.com","123");

    constructor(private router:Router) {

    }

    goToHome(){
        this.router.navigate(['/home']);
    }
}
