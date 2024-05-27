import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkedTheme? = document.getElementById('theme');
  private elementList:NodeListOf<Element>;

  constructor() {
    const localStorageTheme = localStorage.getItem('lsTheme') ?? 'default-dark';
    this.linkedTheme?.setAttribute('href', `./assets/css/colors/${localStorageTheme}.css`);
    this.elementList = document.querySelectorAll(".selector");
  }

  ngOnInit(): void {
  }

  changeTheme(theme: string) {
    this.elementList = document.querySelectorAll(".selector");
    const href = `./assets/css/colors/${theme}.css`;
    this.linkedTheme?.setAttribute('href', href);
    localStorage.setItem('lsTheme', theme);
    this.checkMark();
  }

  checkMark(){
    this.elementList.forEach(element => {
      element.classList.remove('working');
      const actualHref = this.linkedTheme?.getAttribute('href');
      const thisElementHref = `./assets/css/colors/${element.getAttribute('data-theme')}.css`;

      if(actualHref === thisElementHref){
        element.classList.add('working');
      }
    })
  }

}
