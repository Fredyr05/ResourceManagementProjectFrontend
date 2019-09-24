import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService:SignupService,private router:Router){}

  model:UserModel = {
    username:'',
    email:'',
    password:''
  };

  signupForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.minLength(4)]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    passConfirm: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  ngOnInit() {
  }

  signupInfo(){

  }

  onSubmit(){
    this.model.username = this.signupForm.value.username;
    this.model.email = this.signupForm.value.email;
    this.model.password = this.signupForm.value.password;

    if(this.model.password == this.signupForm.value.passConfirm){
      this.signupService.postNewUser(this.model).subscribe(
        res=>{
          if(res){
            this.router.navigate(['/login'])
          }
        }
      );
    }
    else{
      window.alert('Passwords do not match!');
    }
    
  }

  get username(){
    return this.signupForm.get('username');
  }

  get email(){
    return this.signupForm.get('email');
  }

  get password(){
    return this.signupForm.get('password');
  }

  get passConfirm(){
    return this.signupForm.get('passConfirm');
  }

}

export interface UserModel{
  username:string;
  email:string;
  password:string;

}
