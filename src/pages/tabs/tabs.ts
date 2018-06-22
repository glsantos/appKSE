import { Component } from '@angular/core';

import { ComunicadosPage } from '../comunicados/comunicados';
import { AgendamentosPage } from '../agendamentos/agendamentos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AgendamentosPage;
  tab2Root = ComunicadosPage;

  constructor() {

  }
}
