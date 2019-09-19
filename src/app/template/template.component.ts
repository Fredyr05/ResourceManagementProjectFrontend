import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  columnForm: FormGroup;
  cols: FormArray;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.columnForm = this.formBuilder.group({
      columns: this.formBuilder.array([this.createRow()])
    });
    this.cols = this.columnForm.controls.columns as FormArray;
  }
  createRow(): FormGroup {
    return this.formBuilder.group({
                name: '',
                description: ''
    });

  }
  addRow(): void {
    this.cols = this.columnForm.controls.columns as FormArray;
    this.cols.push(this.createRow());
  }
  deleteRow(index: number): void {
    this.cols = this.columnForm.controls.columns as FormArray;
    this.cols.removeAt(index);
  }
}

