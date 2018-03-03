import { SettingsService } from './../../services/services.index';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService ) { }

  ngOnInit() {
    this.checkTheme();
  }

  changeColor (link: string, theme: any): void {
    const selectors = document.getElementsByClassName('selector');

    for (let ref of selectors) {
        ref.classList.remove('working');
    }

    link.classList.add('working');
    this._settings.applyTheme(theme);
  }



  checkTheme() {
    const selectors = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme;

    for (let ref of selectors) {
      if ( ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
      }
    }
  }


}
