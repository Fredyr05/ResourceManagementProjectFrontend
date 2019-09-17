import { Component } from '@angular/core';

export interface Project {
    projId: number;
    projName: String;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

    projects: Project[] = [];
    project: Project;

    columnNames: String[];
    columnData;
    selected;

    addProject(projId:number,projName:String){
        if(this.projects.length == 0){
            this.selected = projName;
        }
        this.project = {
            projId,
            projName
        };
        this.projects.push(this.project);
    }
  
    fillDummyData(){
        this.columnNames = ["PROJECT NAME", "PROJECT CODE"];
        this.columnData = [{
            resource: 'Wood',
            code: '00 00 00'
        },{
            resource: 'Metal',
            code: '11 11 11'
        },{
            resource: 'Coal',
            code: '22 22 22'
        },{
            resource: 'Paper',
            code: '33 33 33'
        },{
            resource: 'Diamond',
            code: '44 44 44'
        },{
            resource: 'Gold',
            code: '55 55 55'
        },{
            resource: 'Steel',
            code: '66 66 66'
        },{
            resource: 'Sand',
            code: '77 77 77'
        },{
            resource: 'Stone',
            code: '88 88 88'
        }]

        this.addProject(1,"Project 1");
        this.addProject(2,"Project 2");
    }
}
