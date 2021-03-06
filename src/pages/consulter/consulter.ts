import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MondossierPage } from '../mondossier/mondossier';

/**
 * Generated class for the ConsulterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulter',
  templateUrl: 'consulter.html',
})
export class ConsulterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  mon(){
    this.navCtrl.push(MondossierPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsulterPage');
  }

}
