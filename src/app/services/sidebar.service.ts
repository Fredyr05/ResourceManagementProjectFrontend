import { Injectable } from '@angular/core';

@Injectable()

export class SidebarService {

    sideSize:String = '30%';
    contentSize:String = '70%';

    getSize(){
        return this.sideSize;
        console.log(this.sideSize);
    }

    getContentSize(){
        return this.contentSize;
        console.log(this.contentSize);
    }

    setSize(sideSize:String){
        this.sideSize = sideSize;
    }

    setContentSize(contentSize:String){
        this.contentSize = contentSize;
    }
    
}