import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendarVisitaPage } from './agendar-visita';

@NgModule({
  declarations: [
    AgendarVisitaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendarVisitaPage),
  ],
})
export class AgendarVisitaPageModule {}
