import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecherchesPage } from './recherches';

@NgModule({
  declarations: [
    RecherchesPage,
  ],
  imports: [
    IonicPageModule.forChild(RecherchesPage),
  ],
})
export class RecherchesPageModule {}
