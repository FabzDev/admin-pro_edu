import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkedTheme? = document.getElementById('theme');


  constructor() {
    const hrefLS = localStorage.getItem('href') ?? './assets/css/colors/default-dark.css';
    this.linkedTheme?.setAttribute('href', hrefLS);
  }

  ngOnInit(): void {
  }

  onClickTheme(theme: string) {
    const href = `./assets/css/colors/${theme}.css`;
    this.linkedTheme?.setAttribute('href', href);
    localStorage.setItem('href', href);
  }

  checkMark(elementList:NodeListOf<Element>){
    elementList.forEach(element => {
      element.classList.remove('working');
      const actualHref = this.linkedTheme?.getAttribute('href');
      const thisElementHref = `./assets/css/colors/${element.getAttribute('data-theme')}.css`;

      if(actualHref === thisElementHref){
        element.classList.add('working');
      }
    })
  }

}
