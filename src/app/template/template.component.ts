import { Component, OnInit } from '@angular/core';
import { FormulaService } from '../services/formula.service';
import { column } from './column';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  constructor(private http: FormulaService) { }
  columns: column[];
  visiables: {name: string, visibility:boolean}[]=[{name:'resId', visibility:false},{name:'cost_code', visibility:false},{name:'editable', visibility:false},{name:'item_id', visibility:false}];
  ngOnInit() {
    this.http.getAllProjects().subscribe(
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
  saveAll(){
    this.saveVisiable();
  }

}

