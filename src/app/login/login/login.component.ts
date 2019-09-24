import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:UserModel = {
    username:'',
    password:'',
    email:''
  };

  loginForm = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(4)]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  constructor(private signupService: SignupService,private router:Router) { }

  ngOnInit() {

    // this.loginForm = this.fb.group({
    //   username: ['',
    //   [Validators.required, Validators.minLength(3)]],
    //   password:['',
    //   [Validators.required,Validators.minLength(5)]],
    //   checkbox: false
    // });

    // this.loginForm.valueChanges.subscribe(console.log);
  }

  loginClick(){
    this.model.username = this.loginForm.value.username;
    this.model.password = this.loginForm.value.password;
    console.log(this.model);
    this.signupService.getUser(this.model).subscribe(
      (res:any)=>{
        console.log(res);
        if(res.password=="true"){
            // console.log('Yess');
            localStorage.setItem("username", res.username);
            localStorage.setItem("login", "allowed");
            this.router.navigate(['/resource'])
        }
        else{
          window.alert('User does not exist');
        }
      }

    );
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }
}

export interface UserModel{
  username:string;
  email:string;
  password:string;

}
