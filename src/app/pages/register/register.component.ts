import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment';

const passwordRegex = environment.PASSWORD_REGEX;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  constructor(private router:Router, private fb:FormBuilder, private accountService:AccountService) { }

  registerForm = this.fb.group({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.pattern(passwordRegex)]),
    confirmPassword : new FormControl(''/*, [Validators.required, Validators.pattern(passwordRegex)]*/),
  })

  ngOnInit() {}

  backToLogin(){
    console.log("backToLogin");
    this.router.navigate(['/']);
  }

  submitForm(){
    console.log("Submit2");
    this.accountService.register(this.registerForm.value);
  }

}
