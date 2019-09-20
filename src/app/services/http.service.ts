import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

@Injectable()

export class HttpService {
    constructor(private http: HttpClient){}

    getAllProjects(){
        return this.http.get('http://localhost:8080/RMP/project');
    }

    getAllResources(){
        return this.http.get('http://localhost:8080/RMP/resource');
    }

    getProjectResources(projId:string){
        return this.http.get('http://localhost:8080/RMP/project/' + projId + '/resources');
    }
    
}