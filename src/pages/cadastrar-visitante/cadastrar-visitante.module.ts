import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarVisitantePage } from './cadastrar-visitante';

@NgModule({
  declarations: [
    CadastrarVisitantePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarVisitantePage),
  ],
})
export class CadastrarVisitantePageModule {}
