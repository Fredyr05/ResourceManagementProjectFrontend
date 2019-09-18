import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
    constructor(private http: HttpClient){}

    getAllProjects(){
        return this.http.get('http://localhost:8080/RMP/project');
    }

    getAllResources(){
        return this.http.get('http://localhost:8080/RMP/resource');
    }
    
}