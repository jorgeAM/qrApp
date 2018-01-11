import { Injectable } from '@angular/core';
//MODELO
import { ScanData } from '../../models/scan-data.model'
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialProvider {
  private historial:ScanData[] = [];

  constructor(private iab: InAppBrowser) {}

  agregarHistorial(texto:string){
    let data = new ScanData(texto);
    this.historial.push(data);
    this.abrirScan(0);
  }

  abrirScan(index: number){
    let scanData = this.historial[index];
    switch(scanData.tipo){
      case "http":
        this.iab.create(scanData.info, "_system");
        break;

      default:
        console.error("Tipo no soportado");
    }
  }

  cargarHistorial(){
    return this.historial;
  }

}
