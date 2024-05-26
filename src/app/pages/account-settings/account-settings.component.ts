import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: `
  #themecolors .selector{
    cursor: pointer;
  }
  `
})
export class AccountSettingsComponent {


  onClickTheme(theme: string){
    const linkedTheme = document.getElementById("theme");
    const href = `./assets/css/colors/${theme}.css`;

    linkedTheme?.setAttribute('href', href);
  }

}
