import { Component, Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable()
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private theme: BehaviorSubject<String>;
 
  selectedTheme: String;
 
  constructor() {
    this.theme = new BehaviorSubject('light-theme');
    this.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }
 
  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.setActiveTheme('light-theme');
    } else {
      this.setActiveTheme('dark-theme');
    }
  }

    setActiveTheme(val) {
        this.theme.next(val);
    }
 
    getActiveTheme() {
        return this.theme.asObservable();
    }
}
