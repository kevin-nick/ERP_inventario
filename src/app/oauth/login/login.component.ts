import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // $('#login-button').click(function(){
  //   $('#login-button').fadeOut("slow",function(){
  //     $("#container").fadeIn();
  //     TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
  //     TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
  //   });
  // });

  // $(".close-btn").click(function(){
  //   TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
  //   TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
  //   $("#container, #forgotten-container").fadeOut(800, function(){
  //     $("#login-button").fadeIn(800);
  //   });
  // });

  // /* Forgotten Password */
  // $('#forgotten').click(function(){
  //   $("#container").fadeOut(function(){
  //     $("#forgotten-container").fadeIn();
  //   });
  // });



}
