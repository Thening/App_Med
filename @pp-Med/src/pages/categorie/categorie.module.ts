import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriePage } from './categorie';

@NgModule({
  declarations: [
    CategoriePage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriePage),
  ],
})
export class CategoriePageModule {}
