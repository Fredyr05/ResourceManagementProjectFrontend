import { Component } from '@angular/core';

export interface Project {
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

    addProject(projName:String){
        this.project = {
            projName
        };
        this.projects.push(this.project);
    }
  
}
