import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MondossierPage } from '../mondossier/mondossier';

/**
 * Generated class for the ModifdossierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifdossier',
  templateUrl: 'modifdossier.html',
})
export class ModifdossierPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  sauvegarder(){
    this.navCtrl.push(MondossierPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifdossierPage');
  }

}
