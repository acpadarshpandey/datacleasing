import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { EncrDecrService } from './incrept';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginFrom: FormGroup;
  email:any;
  password:any
  constructor(
    public router: Router,
    public EncrDecrServic : EncrDecrService,
    public authService: AuthServiceService,
  ) { }

  ngOnInit(): void {
    this.loginFrom = new FormGroup({
      email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])),
    })
  }
  // login method  
  loginform() {
    const payload ={
      "password": this.password,
      "email": this.email
    }
    payload["password"] = this.EncrDecrServic.set('0fFX&Jwp#@74AHk!',this.password);
    payload["email"] = this.EncrDecrServic.set('0fFX&Jwp#@74AHk!', this.email);
    this.authService.login(payload).subscribe((response: any) => {
      localStorage.setItem('tokenId', JSON.stringify(response.body.token.access));
      this.router.navigate(['/dashboard/']);
    });
  }

}
