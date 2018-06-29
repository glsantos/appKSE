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

  public visitanteCadastrado: boolean = false;
  public visitanteCadastradoVal: string;
  public visitanteRgAviso: string;
  public rgDigitado: string;
  public nomeVisitante: any = null;

  public nome: any = null;
  public cpf: any = null;
  public email: any = null;
  public telefoneCelular: any = null;
  public empresa: any = null;
  public prestador: any = null;
  public isPrestador: boolean = true;

  // Simulando API
  visitantes: any;
  lista = [
    { id: 1, nome: "Gabriel Santos", rg: "53.356.092-5", cpf: "373.663.318-13", email: "gabriel._.lima@hotmail.com", empresa: null, telefoneCelular: "4002-8922", prestador: false },
    { id: 2, nome: "Santos Gabriel", rg: "53.300.092-5", cpf: "373.663.318-13", email: "lima@hotmail.com", empresa: "Telecom", telefoneCelular: "(11)94002-8922", prestador: true },
  ];

  // Variáveis para manipulação da Data
  public data: any;
  public dataAtual: any;
  public horaMinima: any;
  public mesmaData: boolean;
  public dataDiferente: boolean;
  public nomeSelecionado: any;
  public nomeSelecionadoAnt: any;
  public isChecked: boolean;
  public preencheuRgCorretamente: boolean = false;
  public bloqueiaCamposCadastrado: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {

    this.initializeItems();
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad AgendarVisitaPage');

    this.dataAtual = this.resgataDataAtual();
  }

  initializeItems() {
    this.visitantes = this.lista;
  }

  limpaMensagens(rgDigitado) {

    if (rgDigitado == "" || rgDigitado == " " || rgDigitado == null) {

      this.visitanteCadastrado = false;
      this.visitanteCadastradoVal = null;
      this.visitanteRgAviso = null;

      this.nome = null;
      this.cpf = null;
      this.email = null;
      this.telefoneCelular = null;
      this.empresa = null;
      this.prestador = false;
      
      if (this.preencheuRgCorretamente == true) {

        this.preencheuRgCorretamente = true;
      }else{

        this.preencheuRgCorretamente = false;
      }
    }
  }

  checarExistenciaVisitante(rgDigitado) {

    if (rgDigitado != null || rgDigitado == "" || rgDigitado == " ") {

      if (rgDigitado.length == 12) {

        this.visitanteRgAviso = '';

        var i = 0;
        var listVisitantes = this.lista;
        while (i < listVisitantes.length) {

          if (rgDigitado == listVisitantes[i].rg) {

            this.visitanteCadastrado = true;
            this.visitanteRgAviso = null;
            this.visitanteCadastradoVal = "Visitante já cadastrado, confirme os dados!";

            this.preencherVisitanteCadastrado(listVisitantes[i]);
            this.preencheuRgCorretamente = true;
            this.bloqueiaCamposCadastrado = true;
            break;
          } else {

            // Caso o Visitante esteja cadastrado, é desbloqueado os campos para preenchimento do Cadastro do mesmo
            if (i == listVisitantes.length - 1) {

              this.limpaMensagens('');
              this.visitanteCadastradoVal = "Visitante ainda não cadastrado!";
              this.visitanteRgAviso = "Preencha os campos abaixo!";
              
              this.preencheuRgCorretamente = true;
              this.bloqueiaCamposCadastrado = false;
            }
          }

          i++;
        }
      } else if (rgDigitado.length >= 1 && rgDigitado.length < 12) {

        // Quando o campo não está nulo mas não possível o QTD de um RG
        this.limpaMensagens('');
        this.visitanteRgAviso = 'Digite corretamente o RG!';
        this.bloqueiaCamposCadastrado = false;
        this.preencheuRgCorretamente = false;
      } else {

        // Quando o campo é limpo, as variaveis que exibem as mensagens são limpas
        this.limpaMensagens('');
      }
    } else {

      // Quando está nulo pela primeira vez
      this.limpaMensagens('');
    }
  }

  preencherVisitanteCadastrado(dadosVisitante) {

    this.bloqueiaCamposCadastrado = true;

    this.nome = dadosVisitante.nome;
    this.cpf = dadosVisitante.cpf;
    this.email = dadosVisitante.email;
    this.telefoneCelular = dadosVisitante.telefoneCelular;
    this.empresa = dadosVisitante.empresa;
    this.prestador = dadosVisitante.prestador;

    if (this.prestador == true) {

      this.isPrestador = true;
    } else {

      this.isPrestador = false;
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
      if (minutos <= 9) {

        minutos = "0" + minutos;
      }
      this.horaMinima = (hora) + ":" + minutos;
      console.log(this.horaMinima);
    } else {

      this.mesmaData = false;
      console.log("Não há hora mínima!");
    }
  }

  mostrarVisitanteSelecionado(a) {

    console.log('change');

    this.nomeSelecionado = a;
    if (this.nomeSelecionado != this.nomeSelecionadoAnt) {

      this.nomeSelecionadoAnt = a;
      this.isChecked = false;
      this.isChecked = true;
    } else {

      this.nomeSelecionado = "";
    }

  }
}
