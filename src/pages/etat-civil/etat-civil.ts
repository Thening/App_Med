import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuiviMedicalPage } from '../suivi-medical/suivi-medical';

/**
 * Generated class for the EtatCivilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etat-civil',
  templateUrl: 'etat-civil.html',
})
export class EtatCivilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  suivant(){
    this.navCtrl.push(SuiviMedicalPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtatCivilPage');
  }

}
