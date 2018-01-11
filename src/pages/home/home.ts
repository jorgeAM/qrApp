import { Component } from '@angular/core';
import { ToastController, Platform } from 'ionic-angular';
//PLUGIN
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//PROVIDER
import { HistorialProvider } from '../../providers/historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private barcodeScanner: BarcodeScanner,
    public toastCtrl: ToastController,
    private platform: Platform,
    private historialService: HistorialProvider
  ){}

  scanear(){
    console.log('escaneando')
    if(!this.platform.is('cordova')){
      this.historialService.agregarHistorial("http://facebook.com");
      return;
    }

    this.barcodeScanner.scan().then((barcodeData) => {
      //BarCode is here
      console.log('Datos del scan: ', barcodeData);

      if(!barcodeData.cancelled && barcodeData.text != null){
        this.historialService.agregarHistorial(barcodeData.text);
      }

    }, err => {
      let toast = this.toastCtrl.create({
        message: err,
        duration: 2000
      });
      toast.present();
    });
  }
}
