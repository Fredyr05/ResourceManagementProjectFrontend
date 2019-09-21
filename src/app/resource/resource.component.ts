import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { faSearch, faPlus, faBars, faColumns, faFileCsv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit{

  constructor(private httpService: HttpService){}

  resources: any;

  filterValue: string;

  faSearch = faSearch;
  faPlus = faPlus;
  faBars = faBars;
  faColumns = faColumns;
  faFileCsv = faFileCsv;

  ngOnInit(){
    this.getAllResources();
  }

  getAllResources(){
    this.httpService.getAllResources().subscribe(
        res => {this.resources = res;}
    );
  }

  filter() {
    let value = this.filterValue;
    value = value.toUpperCase();
    let tableBody = document.getElementById("bodySearch");
    let tableRows = tableBody.getElementsByTagName("tr");
    for (let i = 0; i < tableRows.length; i++) {
        let row = tableRows[i];
        if (row) {
            let txtValue = row.textContent || (<HTMLElement>row).innerText;
            if (txtValue.trim().toUpperCase().indexOf(value) > -1) {
                (<HTMLElement>tableRows[i]).style.display = "";
            } else {
                (<HTMLElement>tableRows[i]).style.display = "none";
            }
        }       
    }
  }
  
}
