import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit,  HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

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
