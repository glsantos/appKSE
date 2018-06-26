import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComunicadosPageModule } from '../pages/comunicados/comunicados.module';
import { VisitantesPageModule } from '../pages/visitantes/visitantes.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { AgendamentosPageModule } from '../pages/agendamentos/agendamentos.module';
import { AgendarVisitaPageModule } from '../pages/agendar-visita/agendar-visita.module';
import { CadastrarVisitantePageModule } from '../pages/cadastrar-visitante/cadastrar-visitante.module';
import { ConsultaVisitaPageModule } from '../pages/consulta-visita/consulta-visita.module';
import { ConsultaVisitantePageModule } from '../pages/consulta-visitante/consulta-visitante.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComunicadosPageModule,
    VisitantesPageModule,
    MenuPageModule,
    AgendamentosPageModule,
    AgendarVisitaPageModule,
    ConsultaVisitaPageModule,
    CadastrarVisitantePageModule,
    ConsultaVisitantePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
