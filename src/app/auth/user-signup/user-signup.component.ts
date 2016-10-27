import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
    selector: 'user-signup',
    styleUrls: ['./user-signup.component.css'],
    templateUrl: './user-signup.component.html'
})
export class UserSignupComponent {

    public user = {};
    public loginUser = {};

    constructor(private router:Router, private authService: AuthService) {
        this.user = {
            name: '',
            email: '',
            password: ''
        }
    }

    goToHome() {
        this.router.navigate(['/home']);
    }

    onSignup() {
        console.log(this.user);
        this.authService.signUp(this.user)
            .subscribe(user => {
                this.loginUser = user;
                localStorage.setItem('loginUser', JSON.stringify({ user: this.loginUser}));
            })
    }
}
