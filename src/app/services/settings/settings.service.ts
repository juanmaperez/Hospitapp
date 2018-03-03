import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };


  constructor() {
    this.getSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  getSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
    this.applyTheme(this.settings.theme);
  }

  applyTheme(theme) {
    const url = `assets/css/colors/${theme}.css`;
    document.getElementById('theme').setAttribute('href', url );

    this.settings.theme = theme;
    this.settings.themeUrl = url;

    this.saveSettings();
  }


}

interface Settings {
  themeUrl: string;
  theme: string;
}
