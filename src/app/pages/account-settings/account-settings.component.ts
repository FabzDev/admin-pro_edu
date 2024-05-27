import { Component, inject, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ` #themecolors .selector{ cursor: pointer;} `,
})
export class AccountSettingsComponent implements OnInit{
  public settingService = inject(SettingsService);
  public elementList!:NodeListOf<Element>;

  ngOnInit(): void {
    this.elementList = document.querySelectorAll(".selector");
    this.checkMark();
  }

  onClickTheme(theme: string){
    this.settingService.onClickTheme(theme);
    this.checkMark();
  }

  checkMark(){
    this.settingService.checkMark(this.elementList)
  }

}
