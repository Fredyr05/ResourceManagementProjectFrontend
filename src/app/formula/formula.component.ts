import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { FormulaService } from '../services/formula.service';
@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {
      
    cars: any[];
    cols: any[];
  constructor() { }

  ngOnInit() {
            
    this.cols = [
            { field: 'vin', header: 'Vin' },
            {field: 'year', header: 'Year' }
        ];
  }

}
