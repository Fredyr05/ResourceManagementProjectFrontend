import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  size:String = '30%';
  contentSize:String = '70%';

  constructor(private sidebar:SidebarService){}

  getParentSize(){
    this.size = this.sidebar.getSize();
    this.contentSize = this.sidebar.getContentSize();
  }

}
