import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
  sections;
  @HostListener('window:scroll', ['$event']) onWindowScroll(){
    window.addEventListener('scroll', this.scroll);
  }

  constructor() {
  }

  ngOnInit(): void {

  }

  scroll(){
    this.sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;
    this.sections.forEach((current):any => {

        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionID = current.getAttribute('id');

        if((scrollY > sectionTop) && (scrollY <= sectionTop + sectionHeight) ){
          document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active-link');
        }
        else{
          document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove('active-link');
        }
    });
  }


}
