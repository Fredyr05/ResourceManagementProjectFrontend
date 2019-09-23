import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor(private http: HttpClient) { }
      getAllProjects(){
        return this.http.get('http://localhost:8080/RMP/project/1/template/columns');
    }

}
