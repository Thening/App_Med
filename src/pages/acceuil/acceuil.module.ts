import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceuilPage } from './acceuil';

@NgModule({
  declarations: [
    AcceuilPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceuilPage),
  ],
})
export class AcceuilPageModule {}
