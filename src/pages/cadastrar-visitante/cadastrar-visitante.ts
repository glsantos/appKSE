import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastrarVisitantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-visitante',
  templateUrl: 'cadastrar-visitante.html',
})
export class CadastrarVisitantePage {

  public prestador: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarVisitantePage');
  }

  definirtipoVisitante(tpVisitante){

    console.log(tpVisitante);
    if(tpVisitante == true){

      this.prestador = true;
    }else if(tpVisitante == false){

      this.prestador = false;
      console.log("comum");
    }
  }

}
