import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { column } from './column';
import { FormulaService } from '../services/formula.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  constructor(private http: HttpService) { }
  columns: column[];
  formulas:{columns:{"colId":Number},equation:string}[]=[];
  projectId: string = '1';
  visiables: {name: string, visibility:boolean}[]=[{name:'resId', visibility:false},{name:'cost_code', visibility:false},{name:'editable', visibility:false},{name:'item_id', visibility:false}];
  ngOnInit() {
    this.http.getAllColumns(this.projectId).subscribe(
            (res:column[]) => {
                this.columns =res;
                console.log(this.columns);
            }            
        );
    if(localStorage.getItem('visiables')!=null){
     console.log(JSON.parse(localStorage.getItem('visiables')));
    this.visiables= JSON.parse(localStorage.getItem('visiables'));}
  }
  addRow(): void {
    this.columns.push({colId: null, colName: '', type: '', equation: ''})
  }
  deleteRow(index: number): void {
    this.columns.splice(index, 1);
  }
  isFormula(index: number): boolean {
    if (this.columns[index].type === 'Formula'){
      return false;
    } else {
        return true;
    }
  }
  saveVisiable(){
    localStorage.setItem('visiables', JSON.stringify(this.visiables));
  }
  saveColumns(){
        for(let i = 0; i < this.columns.length; i++){
      this.formulas.push({columns:{"colId":this.columns[i].colId},equation:this.columns[i].equation});
    }console.log(this.formulas);
    forkJoin([this.http.postAllColumns(this.projectId,this.columns),this.http.postAllFormulas(this.projectId,this.formulas)]).subscribe(res => {});

  }
  saveAll(){
    this.saveVisiable();
    this.saveColumns();
  }

}

