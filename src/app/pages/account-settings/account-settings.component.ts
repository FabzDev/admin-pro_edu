import { Component, inject, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ` #themecolors .selector{ cursor: pointer;} `,
})
export class AccountSettingsComponent implements OnInit{
  public settingService = inject(SettingsService);

  ngOnInit(): void {
    this.changeTheme(localStorage.getItem('lsTheme') || 'default-dark')
  }

  changeTheme(theme: string){
    this.settingService.changeTheme(theme);
  }

}
