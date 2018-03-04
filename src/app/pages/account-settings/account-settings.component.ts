import { SettingsService } from './../../services/services.index';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'page-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService ) { }

  ngOnInit() {
    this.checkTheme();
  }

  changeColor (link: any, theme: any): void {
    const selectors: any = document.getElementsByClassName('selector');

    for (const ref of selectors) {
        ref.classList.remove('working');
    }

    link.classList.add('working');
    this._settings.applyTheme(theme);
  }



  checkTheme() {
    const selectors: any = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme;

    for (const ref of selectors) {
      if ( ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
      }
    }
  }


}
