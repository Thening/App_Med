import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MondossierPage } from './mondossier';

@NgModule({
  declarations: [
    MondossierPage,
  ],
  imports: [
    IonicPageModule.forChild(MondossierPage),
  ],
})
export class MondossierPageModule {}
