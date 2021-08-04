import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sections = document.querySelectorAll('section[id]');
  @ViewChild('header')head:ElementRef;
  @HostListener('window:scroll', ['$event']) onWindowScroll(){
    if(window.scrollY >= 100)
    {
      this.changeHeader();
    }
    else{
      this.head.nativeElement.classList.remove('scroll-header');
    }
  }

  changeHeader(): void {
    this.head.nativeElement.classList.add('scroll-header');
    console.log(this.sections);

  }



  constructor() { }

  ngOnInit(): void {
  }

  showMenu(nav:HTMLDivElement){
    nav.classList.add('show-menu');
  }

  hideMenu(nav:HTMLDivElement){
    nav.classList.remove('show-menu');
  }
}
