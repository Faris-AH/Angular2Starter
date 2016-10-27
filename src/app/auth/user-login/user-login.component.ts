import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'user-login',
    styleUrls: ['./user-login.component.css'],
    templateUrl: './user-login.component.html'
})
export class UserLoginComponent {

    public user = {};

    constructor(private router:Router) {
        this.user = {
            name: '',
            email: '',
            password: ''
        }
    }

    goToHome() {
        this.router.navigate(['/home']);
    }
}
