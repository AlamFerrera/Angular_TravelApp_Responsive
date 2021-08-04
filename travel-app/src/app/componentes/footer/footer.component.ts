import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('scroll_up')up:ElementRef;
  @HostListener('window:scroll', ['$event']) onWindowScroll(){
    if(window.scrollY >= 560)
    {
      this.showScroll();
    }
    else{
      this.up.nativeElement.classList.remove('show-scroll');
    }
  }

  showScroll(): void {
    this.up.nativeElement.classList.add('show-scroll');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
