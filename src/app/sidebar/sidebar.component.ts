import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private sidebar:SidebarService){}

  opened = false;
  buttonText = '>';

  openClose(){
    this.opened = !this.opened;
    if(this.buttonText === '>'){
        this.buttonText = '<';
        this.sidebar.setSize('30%');
        this.sidebar.setContentSize('70%');
    }
    else{
        this.buttonText = '>';
        this.sidebar.setSize('10%');
        this.sidebar.setContentSize('90%');
    }
  }
}
