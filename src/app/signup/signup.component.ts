import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { EncrDecrService } from '../login-page/incrept';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  email:any;
  password:any
  confirmPassword:any
  role:string = 'Admin'
  constructor(
    public router: Router,
    public EncrDecrServic : EncrDecrService,
    public authService: AuthServiceService,
  ) { }


  signupform() {
    const payload ={
      "password": this.password,
      "password2": this.confirmPassword,
      "email": this.email,
      "role":"Admin"

    }
    debugger
    this.authService.signup(payload).subscribe((response: any) => {
    });
  }
}
