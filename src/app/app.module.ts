import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { HistorialPage } from '../pages/historial/historial';
import { MapaPage } from '../pages/mapa/mapa';
//PLUGGIN PARA LECTORA QR
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialProvider } from '../providers/historial/historial';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    HistorialPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    HistorialPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    HistorialProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
