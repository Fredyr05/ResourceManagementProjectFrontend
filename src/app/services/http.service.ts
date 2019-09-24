import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable()

export class HttpService {
    constructor(private http: HttpClient){}
    
    url = 'http://localhost:19090/RMP';

    postNewResource(resource){
        return this.http.post(this.url + '/resource', resource);
    }

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

    getAllColumns(projId:string){
        return this.http.get(this.url + '/project/' + projId +'/template/columns');
    }

    postAllColumns(projId:string, columns){
        return this.http.post(this.url + '/project/' + projId +'/template/columns', columns);
    }
    postAllFormulas(projId,formulas){
        return this.http.post(this.url + '/project/' + projId +'/template/formulas', formulas);
    }


}