import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('header')head:ElementRef;
  @HostListener('window:scroll', ['$event']) onWindowScroll(){
    if(window.scrollY >= 100)
    {
      this.head.nativeElement.classList.add('scroll-header');
    }
    else{
      this.head.nativeElement.classList.remove('scroll-header');
    }
  }

  constructor() { }

  ngOnInit(): void {
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    let themeButton = document.querySelector('#theme-button');

    this.getCurrentTheme(selectedTheme);
    this.getCurrentIcon(selectedIcon, selectedTheme);

    if(selectedTheme){
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](selectedTheme);
      themeButton.classList[selectedIcon === 'ri-moon-line'? 'add' : 'remove'](selectedIcon);
    }
  }

  showMenu(nav:HTMLDivElement){
    nav.classList.add('show-menu');
  }

  hideMenu(nav:HTMLDivElement){
    nav.classList.remove('show-menu');
  }

  changeTheme(btnId){
    const themeBtn = btnId;
    const darkTheme = 'dark-theme';
    const iconTheme = 'ri-sun-line';

    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', this.getCurrentTheme(darkTheme));
    localStorage.setItem('selected-icon', this.getCurrentIcon(iconTheme, btnId));
  }

  getCurrentTheme(darkTheme):string{
    return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  }

  getCurrentIcon(currentIcon, themeBtn){
    if(themeBtn.classList !== undefined)
    {
      return themeBtn.classList.contains(currentIcon) ? 'ri-moon-line' : 'ri-sun-line';
    }
  }
}
