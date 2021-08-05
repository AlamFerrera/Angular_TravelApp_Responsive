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
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2800
    });

    sr.reveal(`.home__data, .home__social-link,
               .home__info, .discover__container,
               .experience__data, .experience__overlay,
               .place__card, .sponsor__content, .footer__data,
               .footer__rights`, {
        origin: 'top',
        interval: 100
    });

    sr.reveal(`.about__data, .video__description, .subscribe__description`, {
        origin: 'left',
    });

    sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
      origin: 'right',
      interval: 100
  });
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

