import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the VisitanteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VisitanteProvider {

  private baseApiPath = "http://localhost:50347/api/";

  constructor(public http: HttpClient) {
    console.log('Hello VisitanteProvider Provider');
  }

  getVisitantes(){

    return this.http.get(this.baseApiPath + "visitante/");
  }

}
