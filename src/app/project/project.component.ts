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

    resRemovedFromProj = [];

    filterValue: string = "";
    filteredProjects: any;

    @Input() selectAllCheck: boolean = false;
    @Input() clearAllCheck: boolean = false;

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
            res => {this.projectResources = res;}
        );
    }

    postResourceToProject(projId:string){
        this.projectResources.forEach(element => {
            this.httpService.postResourceToProject(projId,element.resId).subscribe(
                res => {}
            )
        });
    }

    addToProjectResources(){
        this.resources.forEach(element => {
            if(element.checked == true && !this.isResourceInProject(element)){
                let temp: any = {};
                temp.resId = element.resId;
                temp.resName = element.resName;
                this.projectResources.push(temp);
            }
        });
    }

    isResourceInProject(resource){
        let inProject: boolean = false;
        this.projectResources.forEach(element => {
            if(resource.resId == element.resId){
                inProject =  true;
            }
        });
        return inProject;
    }

    removeFromProjectResources(){
        for(let i = 0; i < this.projectResources.length; i++){
            if(this.projectResources[i].checked == true){
                this.resRemovedFromProj.push(this.projectResources[i]);
                this.projectResources.splice(i,1);
                i--;
            }
        }
    }

    deleteResourceFromProject(projId:string){
        this.resRemovedFromProj.forEach(element => {
            this.httpService.deleteResourceFromProject(projId, element.resId).subscribe();
        });
    }

    deleteAndPost(projId:string){
        this.deleteResourceFromProject(projId);
        this.postResourceToProject(projId);
    }

    selectAll(){
        (<HTMLInputElement>document.getElementById("selectAll")).checked = true;
        (<HTMLInputElement>document.getElementById("clearAll")).checked = false;
        this.resources.forEach(element => {
            element.checked = true;
        });
    }

    clearAll(){
        (<HTMLInputElement>document.getElementById("clearAll")).checked = true;
        (<HTMLInputElement>document.getElementById("selectAll")).checked = false;
        this.resources.forEach(element => {
            element.checked = false;
        });
    }

    filter(value: string) {
        value = value.toUpperCase();
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
