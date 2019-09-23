import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService:SignupService){}

  model:UserModel = {
    username:'',
    email:'',
    password:''
  };

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passConfirm: new FormControl('')
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
        res=>{console.log(res)}
      );
    }
    else{
      console.log('did not work')
    }
    
  }

}

export interface UserModel{
  username:string;
  email:string;
  password:string;

}
