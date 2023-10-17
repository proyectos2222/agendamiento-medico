import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
})
export class AnimationPage implements OnInit {

  constructor(public router:Router) { 
    setTimeout(() =>{
      this.router.navigateByUrl('login')
    },4000);
  }

  ngOnInit() {
  }
}
