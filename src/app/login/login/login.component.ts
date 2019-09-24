import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  model:UserModel = {
    username:'',
    password:'',
    email:''
  };

  loginForm = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(4)]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  constructor(private signupService: SignupService,private router:Router, private httpService: HttpService) { }

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

  ngDoCheck(){
    if(this.httpService.getTitle() != ""){
      this.httpService.setTitle("");
    }
  }

  loginClick(){
    this.model.username = this.loginForm.value.username;
    this.model.password = this.loginForm.value.password;
    console.log(this.model);

    if(this.loginForm.invalid){
      window.alert('Please fill in all fields correctly');
      return;
    }

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
