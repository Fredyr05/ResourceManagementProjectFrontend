import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';
import { faSearch, faPlus, faBars, faColumns, faFileCsv, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { PageEvent } from "@angular/material";

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit{

  constructor(private httpService: HttpService){}

  resources: any;
  columns: any;
  colLength: number;

  filterValue: string;

  addRowBool: boolean = false;

  faSearch = faSearch;
  faPlus = faPlus;
  faBars = faBars;
  faColumns = faColumns;
  faFileCsv = faFileCsv;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  ngOnInit(){
    this.getAllResources();
    this.httpService.setTitle("Resources");
  }

  getAllResources(){
    this.httpService.getAllResources().subscribe(
        res => {
          this.resources = res;
          this.columns = Object.keys(this.resources[0]);
          this.colLength = this.columns.length - 1;
        }
    );
  }

  showAddRow(){
    this.addRowBool = !this.addRowBool;
  }

  addRowToDatabase(){
    let code = <HTMLInputElement>document.getElementById("col1");
    let name = <HTMLInputElement>document.getElementById("col2");

    let resCode = code.value;
    let resName = name.value;

    if(resCode != "" && resName != ""){
      let resource = {
        "resCode":resCode,
        "resName":resName
      }
      this.resources.push(resource);
      this.postNewResource(resource);
      this.showAddRow();
    }
  }

  postNewResource(resource){
    this.httpService.postNewResource(resource).subscribe(
      res => {}
    )
  }

  addColumn(){
    console.log("Not working yet");
  }

  importCSV(files: FileList){
    if(files && files.length > 0) {
      let file : File = files.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        let csvLines = csv.split("\n");

        let header = csvLines[0].split(",");
        for(let i = 1; i < csvLines.length; i++){
          let cols = csvLines[i].split(",");
          let resource = {
            "resCode":"",
            "resName":""
          }
          for(let j = 0; j < cols.length; j+=2){
            resource.resCode = cols[j];
            resource.resName = cols[j+1];
          }
          if(resource.resCode != "" && resource.resName != ""){
            this.resources.push(resource);
            this.postNewResource(resource);
          }
        }
      }
    }
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

  lowValue: number = 0;
  highValue: number = 20;

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
  
}
