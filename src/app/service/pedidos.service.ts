import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoModel } from 'src/model/pedido-model';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor(private http: HttpClient) {}

  recuperaPedido() {
    return this.http.get<Array<PedidoModel>>('http://localhost:8080/pedidos');
  }

  detalheProduto(numero: number) {
    return this.http.get<PedidoModel>(
      `http://localhost:8080/pedidos/numero?numero=${numero}`
    );
  }
}
