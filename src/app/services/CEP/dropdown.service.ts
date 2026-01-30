import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from '../../../../node_modules/rxjs/operators';
import { EstadoBr } from './CEP-Models/estado-br.model';
import { Cidade } from './CEP-Models/cidade';

@Injectable()
export class DropdownService {
  constructor(private httpClient: HttpClient) {}

  getEstadosBr() {
    return this.httpClient.get<EstadoBr[]>('./CEP-Models/estado-br.model');
  }

  getCidades(idEstado: number) {
    return this.httpClient.get<Cidade[]>('./CEP-Models/cidade')
    .pipe(
      // tslint:disable-next-line:triple-equals
      map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
    );
  }

}
