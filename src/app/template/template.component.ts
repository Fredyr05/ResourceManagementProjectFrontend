import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  constructor() { }
  columns: [{colId: number, colName: string, type: string, formula: string}] = [{colId: null, colName: '', type: 'Number', formula: ''}];

  ngOnInit() {
  }
  addRow(): void {
    this.columns.push({colId: null, colName: '', type: '', formula: ''})
  }
  deleteRow(index: number): void {
    this.columns.splice(index, 1);
  }
  isFormula(index: number): boolean {
// if (this.columns[index].type === 'Formula'){
//   return false;
// } else {
//   return true;
// }
return true;
  }
}

