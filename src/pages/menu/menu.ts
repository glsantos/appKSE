import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AgendarVisitaPage } from '../agendar-visita/agendar-visita';
import { CadastrarVisitantePage } from '../cadastrar-visitante/cadastrar-visitante';
import { ConsultaVisitaPage } from '../consulta-visita/consulta-visita';
import { ConsultaVisitantePage } from '../consulta-visitante/consulta-visitante';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  abrirAgendarVisita() {

    this.navCtrl.push(AgendarVisitaPage);
  }

  abrirConsultarVisita(){

    this.navCtrl.push(ConsultaVisitaPage);
  }

  abrirCadastroVisitante(){

    this.navCtrl.push(CadastrarVisitantePage);
  }

  abrirConsultaVisitante(){

    this.navCtrl.push(ConsultaVisitantePage);
  }
}
