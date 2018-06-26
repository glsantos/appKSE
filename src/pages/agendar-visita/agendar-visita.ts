import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
  
/**
 * Generated class for the AgendarVisitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agendar-visita',
  templateUrl: 'agendar-visita.html',
})
export class AgendarVisitaPage {

  public data: any;
  public dataAtual: any;
  public horaMinima: any;
  public mesmaData: boolean;
  public dataDiferente: boolean;

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad AgendarVisitaPage');

    this.dataAtual = this.resgataDataAtual();

    
  }

  public rgEncontrado:any;
  public visitanteExiste: boolean = false;
  public nomeVisitante: string;
  public rgVisitantes = [    
    '35.653.902-4',
    '33.563.029-3',
    '55.365.292-2',
    '55.365.292-2',
    '53.356.092-5',
    '55.365.292-2',
  ];

  encontraRg(rg){

    var i = 0;
    while(i <= this.rgVisitantes.length){

      if(rg == this.rgVisitantes[i]){

        console.log('Visitante encontrado!');
        this.visitanteExiste = true;
        this.nomeVisitante = 'Gabriel Santos';
        this.rgEncontrado = this.rgVisitantes[i];
        break;
      }else{

        if(i == this.rgVisitantes.length){

          console.log('nada encontrado');
        }
      }
      i++;
    }
  }

  resgataDataAtual() {

    this.data = new Date();
    var ano = this.data.getFullYear();
    var mes = this.data.getMonth() + 1;
    var dia = this.data.getDate();
    if (mes <= 9) {

      mes = "0" + mes;
    }

    var dataHoje = ano + "-" + mes + "-" + dia;

    return dataHoje;
  }

  definirHoraMinima(dataSelecionada) {

    var hora: any;
    var minutos: any;
    if (dataSelecionada == this.dataAtual) {

      this.mesmaData = true;

      hora = this.data.getHours();
      minutos = this.data.getMinutes();
      if(minutos <= 9){

        minutos = "0" + minutos;
      }
      this.horaMinima = (hora)+":"+minutos;
      console.log(this.horaMinima);
    }else{

      this.mesmaData = false;
      console.log("Não há hora mínima!");
    }
  }
}
