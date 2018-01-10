import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
//PLUGIN
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private barcodeScanner: BarcodeScanner,
    public toastCtrl: ToastController
  ){}

  scanear(){
    console.log('escaneando')
    this.barcodeScanner.scan().then((barcodeData) => {
      //BarCode is here
      console.log('Datos del scan: ', barcodeData);
    }, err => {
      let toast = this.toastCtrl.create({
        message: err,
        duration: 2000
      });
      toast.present();
    });
  }
}
