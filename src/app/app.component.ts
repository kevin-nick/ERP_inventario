import { Component, HostListener } from '@angular/core';
import { event } from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  width: number = 0;
  
  @HostListener('window:resize', ['$event'])
      onResize(event) {
        this.width = event.target.innerWidth;
        if(this.width <= 420 && this.sideBarOpen != false){
            this.sideBarOpen = !this.sideBarOpen;
        }
      }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
