import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{

    constructor(private httpService: HttpService){}

    projects: any;
    resources: any;

    ngOnInit(){
        this.getAllProjects();
        this.getAllResources();
    }

    getAllProjects(){
        this.httpService.getAllProjects().subscribe(
            res => {this.projects = res;}
        );
    }

    getAllResources(){
        this.httpService.getAllResources().subscribe(
            res => {this.resources = res;}
        );
    }

    filter() {
        let input, filter, select, options, option, txtValue;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        select = document.getElementById("select");
        options = select.getElementsByTagName("mat-option");
        for (let i = 0; i < options.length; i++) {
            option = options[i];
            if (option) {
                txtValue = option.textContent || option.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    options[i].style.display = "";
                } else {
                    options[i].style.display = "none";
                }
            }       
        }
    }
}
