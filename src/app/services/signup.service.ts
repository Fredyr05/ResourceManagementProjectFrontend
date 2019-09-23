import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class SignupService {
    constructor(private http: HttpClient){}
    
    url = 'http://localhost:8080/RMP';

    getAllUsers(){
        return this.http.get(this.url + '/user');
    }

    getUser(user){
        return this.http.post(this.url + '/login',user);
    }

    postNewUser(user){
        return this.http.post(this.url + '/user', user);
    }
    
}