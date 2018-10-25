import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspatientPage } from './inspatient';

@NgModule({
  declarations: [
    InspatientPage,
  ],
  imports: [
    IonicPageModule.forChild(InspatientPage),
  ],
})
export class InspatientPageModule {}
