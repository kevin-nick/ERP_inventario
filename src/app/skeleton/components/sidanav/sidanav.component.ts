import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidanav',
  templateUrl: './sidanav.component.html',
  styleUrls: ['./sidanav.component.scss']
})
export class SidanavComponent implements OnInit {
  isExpanded: boolean = false; 
  isdropdown: boolean = false;
  isUsuarios: boolean = false;
  isProbedores: boolean = false;

  @Input() childMessage: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
