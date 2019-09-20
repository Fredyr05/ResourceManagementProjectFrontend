import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpService } from '../services/http.service'; 
import { SimpleChanges } from '@angular/core';
import { faShare, faList, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnChanges {

    constructor(private httpService: HttpService){}

    projects: any;
    resources: any;
    @Input() projectResources: any;

    filterValue: string = "";
    filteredProjects: any;

    faShare = faShare;
    faList = faList;
    faTrash = faTrash;

    @Input() checked: boolean = false;

    @Input() selectedValue: any;

    ngOnInit(){
        this.getAllProjects();
        this.getAllResources();
    }

    ngOnChanges(changes: SimpleChanges){
        console.log("Changes!");
        this.getProjectResources(changes.selectedValue.currentValue.projId);
    }

    setSelected(value){
        this.selectedValue = value;
        this.getProjectResources(this.selectedValue.projId);
        return this.selectedValue;
    }

    getAllProjects(){
        this.httpService.getAllProjects().subscribe(
            res => {
                this.projects = res;
                this.filteredProjects = res;
                this.selectedValue = this.projects[0];
                this.getProjectResources(this.selectedValue.projId);
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
            res => {this.projectResources = res;},
            () => {},
            () => {console.log(this.projectResources)}
        );
    }

    postResourceToProject(projId:string){
        this.resources.forEach(element => {
            if(element.checked == true){
                this.httpService.postResourceToProject(projId,element.resId).subscribe(
                    res => {}
                )
            }
        });
        this.getProjectResources(projId);
    }

    deleteResourceFromProject(projId:string){
        this.projectResources.forEach(element => {
            if(element.checked == true){
                this.httpService.deleteResourceFromProject(projId, element.resId).subscribe();
            }
        });
        this.getProjectResources(projId);
    }

    selectAll(){
        this.resources.forEach(element => {
            element.checked = true;
        });
    }

    clearAll(){
        this.resources.forEach(element => {
            element.checked = false;
        });
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
