import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Icon } from 'ionic-angular';
import { EtatCivilPage } from '../etat-civil/etat-civil';
import { ConsulterPage } from '../consulter/consulter';

/**
 * Generated class for the DossiermedicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dossiermedical',
  templateUrl: 'dossiermedical.html',
})
export class DossiermedicalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  creer() {
    this.navCtrl.push(EtatCivilPage);
  }
  urgence(){
    this.navCtrl.push(ConsulterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DossiermedicalPage');
  }

}
