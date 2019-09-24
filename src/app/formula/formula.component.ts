import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { FormulaService } from '../services/formula.service';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {
      
    cars: any[];
    cols: any[];
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    if(localStorage.getItem("login") != "allowed"){
      this.httpService.setTitle("");
      this.router.navigate(['/login']);
    }
            
    this.cols = [
            { field: 'vin', header: 'Vin' },
            {field: 'year', header: 'Year' }
        ];
  }

}
