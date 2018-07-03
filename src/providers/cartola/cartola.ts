import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartolaProvider {

  constructor(public http: HttpClient) {
    
  }

  atletas(){

    return this.http.get("https://api.cartolafc.globo.com/mercado/destaques");
  }

}
