import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SuiviMedicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suivi-medical',
  templateUrl: 'suivi-medical.html',
})
export class SuiviMedicalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  connexion(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuiviMedicalPage');
  }

}
