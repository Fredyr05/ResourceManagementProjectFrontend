import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faUserCircle = faUserCircle;
  faQuestionCircle = faQuestionCircle;

  constructor(private router:Router) {}

  signOut(){
    this.router.navigate(['/login']);
  }
}
