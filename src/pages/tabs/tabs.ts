import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
//TAB's
import { HomePage } from '../home/home';
import { HistorialPage } from '../historial/historial';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  home: any;
  historial: any;

  constructor() {
    this.home = HomePage;
    this.historial = HistorialPage;
  }

}
