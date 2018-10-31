import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsulterPage } from '../consulter/consulter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  urgence(){
    this.navCtrl.push(ConsulterPage);
  }
 
}
