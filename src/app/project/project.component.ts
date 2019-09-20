import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    constructor(private httpService: HttpService){}

    projects: any;
    resources: any;
    projectResources: any;

    filterValue: string = "";
    filteredProjects: any;

    @Input() selectedValue: any;

    ngOnInit(){
        this.getAllProjects();
        this.getAllResources();
        this.getProjectResources('1');
    }

    getAllProjects(){
        this.httpService.getAllProjects().subscribe(
            res => {
                this.projects = res;
                this.filteredProjects = res;
                this.selectedValue = this.projects[0].projName;
            }
        );
    }

    getAllResources(){
        this.httpService.getAllResources().subscribe(
            res => {this.resources = res;}
        );
    }

    getProjectResources(projId:string){
        this.httpService.getProjectResources(projId).subscribe(
            res => {this.projectResources = res;}
        );
    }

    filter(value: string) {
        value = value.toUpperCase();
        console.log(value);
        let options = document.getElementsByTagName("mat-option");
        for (let i = 1; i < options.length; i++) {
            let option = options[i];
            if (option) {
                let txtValue = option.textContent || (<HTMLElement>option).innerText;
                if (txtValue.trim().toUpperCase().indexOf(value) > -1) {
                    (<HTMLElement>options[i]).style.display = "";
                } else {
                    (<HTMLElement>options[i]).style.display = "none";
                }
            }       
        }
    }
}
