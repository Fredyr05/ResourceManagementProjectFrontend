import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
    constructor(private http: HttpClient){}
    
    url = 'http://localhost:8080/RMP';

    getAllProjects(){
        return this.http.get(this.url + '/project');
    }

    getAllResources(){
        return this.http.get(this.url + '/resource');
    }

    getProjectResources(projId:string){
        return this.http.get(this.url + '/project/' + projId + '/resources');
    }

    postResourceToProject(projId:string, resId:string){
        return this.http.post(this.url + '/project/' + projId + '/resource/' + resId, {header:{}});
    }

    deleteResourceFromProject(projId:string, resId:string){
        return this.http.delete(this.url + '/project/' + projId + '/resource/' + resId);
    }
    
}