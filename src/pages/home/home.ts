import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnexionPage } from '../connexion/connexion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }
  deconnexion(){
    this.navCtrl.push(ConnexionPage);
  }

}
