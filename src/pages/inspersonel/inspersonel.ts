import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnexionPage } from '../connexion/connexion';


/**
 * Generated class for the InspersonelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inspersonel',
  templateUrl: 'inspersonel.html',
})
export class InspersonelPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspersonelPage');
  }

  connexion(){
    this.navCtrl.push(ConnexionPage);
  }

}
