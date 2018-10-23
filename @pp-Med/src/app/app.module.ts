
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DossiermedicalPage } from '../pages/dossiermedical/dossiermedical';
import { ActualitesPage } from '../pages/actualites/actualites';
import { RecherchesPage } from '../pages/recherches/recherches';
import { TchatPage } from '../pages/tchat/tchat';

import { AcceuilPage } from '../pages/acceuil/acceuil';
import { ConnexionPage } from '../pages/connexion/connexion';
import { CategoriePage } from '../pages/categorie/categorie';
import { InspatientPage } from '../pages/inspatient/inspatient';
import { InspersonelPage } from '../pages/inspersonel/inspersonel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AcceuilPage,
    ConnexionPage,
    CategoriePage,
    InspatientPage,
    InspersonelPage,
    DossiermedicalPage,
    ActualitesPage,
    RecherchesPage,
    TchatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AcceuilPage,
    ConnexionPage,
    CategoriePage,
    InspatientPage,
    InspersonelPage,
    DossiermedicalPage,
    ActualitesPage,
    RecherchesPage,
    TchatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
