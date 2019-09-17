import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      username: ['',
      [Validators.required, Validators.minLength(3)]],
      password:['',
      [Validators.required,Validators.minLength(5)]],
      checkbox: false
    });

    this.loginForm.valueChanges.subscribe(console.log);
  }

  loginClick(){
    console.log(this.loginForm.value);
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }



}
