import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit{

  constructor(private httpService: HttpService){}

  resources: any;

  ngOnInit(){
    this.getAllResources();
  }

  getAllResources(){
    this.httpService.getAllResources().subscribe(
        res => {this.resources = res;}
    );
  }
  
}
