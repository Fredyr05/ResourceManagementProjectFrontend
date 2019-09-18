import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  opened = false;
  buttonText = '>';

  openClose(){
    this.opened = !this.opened;
    if(this.buttonText === '>'){
        this.buttonText = '<';
    }
    else{
        this.buttonText = '>';
    }
  }
}
