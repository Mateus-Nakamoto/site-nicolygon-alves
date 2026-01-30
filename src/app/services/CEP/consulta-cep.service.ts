import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';
import { EstadoBr } from './CEP-Models/estado-br.model';
import { Cidade } from './CEP-Models/cidade';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) {}
  

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  setCidades(){
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.id == 5565))
    );
  }

  getCidades(estadoId: number) {
    console.log('Novo estado: ', estadoId)
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      // tslint:disable-next-line:triple-equals
      map((cidades: Cidade[]) => cidades.filter(c => c.estado == estadoId))
    );
    }



    consultaCEP(cep: string) {

      console.log("HEY MATEUS!!!!!" + cep);
  
      // Nova variável "cep" somente com dígitos.
      cep = cep.replace(/\D/g, '');
  
      // Verifica se campo cep possui valor informado.
      if (cep !== '') {
        // Expressão regular para validar o CEP.
        const validacep = /^[0-9]{8}$/;
  
        // Valida o formato do CEP.
        if (validacep.test(cep)) {
          return this.http.get(`//viacep.com.br/ws/${cep}/json`);
        }
              }
      return of({});
    }

}
