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

  /*
  * This functions applies the new theme color and removes the class active('working') from the others.
  * @params: link(template reference variable), theme name
  * @return: void
  */
  changeColor (link: any, theme: any): void {
    const selectors: any = document.getElementsByClassName('selector');

    for (const ref of selectors) {
        ref.classList.remove('working');
    }

    link.classList.add('working');
    this._settings.applyTheme(theme);
  }

 /*
  * This function checks if exists a theme applied and and class working to this if it works.
  * @params: link(template reference variable), theme name
  * @return: void
  */
  checkTheme(): void {
    const selectors: any = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme;

    for (const ref of selectors) {
      if ( ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
      }
    }
  }


}
