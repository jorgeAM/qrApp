import { Injectable } from '@angular/core';
//MODELO
import { ScanData } from '../../models/scan-data.model'

@Injectable()
export class HistorialProvider {
  private historial:ScanData[] = [];

  constructor() {}

  agregarHistorial(texto:string){
    let data = new ScanData(texto);
    this.historial.push(data);
    console.log(this.historial);
  }

  cargarHistorial(){
    return this.historial;
  }

}
