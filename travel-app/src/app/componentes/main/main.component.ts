import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  onScroll(header){
    console.log("scrolin " , header);


  }

}