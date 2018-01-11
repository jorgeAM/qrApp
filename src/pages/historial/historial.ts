import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
//PROVIDER
import { HistorialProvider } from '../../providers/historial/historial';
//MODELO
import { ScanData } from '../../models/scan-data.model';

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
  historial: ScanData[] = [];

  constructor(private historialService: HistorialProvider) {
  }

  ionViewDidLoad(){
    this.historial = this.historialService.cargarHistorial();
    console.log(this.historial)
  }

  abrirPagina(index: number){
    this.historialService.abrirScan(index);
  }

}
