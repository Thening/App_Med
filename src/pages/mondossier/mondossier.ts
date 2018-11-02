import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModifdossierPage } from '../modifdossier/modifdossier';

/**
 * Generated class for the MondossierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mondossier',
  templateUrl: 'mondossier.html',
})
export class MondossierPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  modifier(){
    this.navCtrl.push(ModifdossierPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MondossierPage');
  }

}
