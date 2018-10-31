import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtatCivilPage } from './etat-civil';

@NgModule({
  declarations: [
    EtatCivilPage,
  ],
  imports: [
    IonicPageModule.forChild(EtatCivilPage),
  ],
})
export class EtatCivilPageModule {}
