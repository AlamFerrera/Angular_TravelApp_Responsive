import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {


  @ViewChild('header')head:ElementRef;
  @HostListener('window:scroll', ['$event']) onWindowScroll(){
    let sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionID = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active-link');
        }
    });

  }

  constructor() {}

  ngOnInit(): void {
  }

}
