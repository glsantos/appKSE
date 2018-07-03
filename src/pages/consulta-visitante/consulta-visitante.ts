import { VisitanteProvider } from './../../providers/visitante/visitante';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConsultaVisitantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta-visitante',
  templateUrl: 'consulta-visitante.html',
  providers: [

    VisitanteProvider
  ]
})
export class ConsultaVisitantePage {

  public lista_visitantes = new Array<any>();

  constructor(public visitanteProvider: VisitanteProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaVisitantePage');

    this.carregaVisitantes();
  }

  carregaVisitantes(){

    this.visitanteProvider.getVisitantes().subscribe(

      data => {

        const response = (data as any);
        
        this.lista_visitantes = response.results;
        console.log(this.lista_visitantes);
      }
    )
  }

}
