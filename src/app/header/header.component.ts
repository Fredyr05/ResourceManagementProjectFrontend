import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck{
  faUserCircle = faUserCircle;
  faQuestionCircle = faQuestionCircle;

  projectTitle: string = this.httpService.getTitle();

  constructor(private router:Router, private httpService: HttpService) {}

  ngDoCheck(){
    this.setHeader();
  }

  setHeader(){
    this.projectTitle = this.httpService.getTitle();
  }

  signOut(){
    localStorage.removeItem("login");
    this.router.navigate(['/login']);
  }
}
