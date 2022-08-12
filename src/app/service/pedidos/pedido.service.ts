import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private http: HttpClient) {}

  async listaPedidos() {
    return this.http.get('https://au-bd555-default-rtdb.firebaseio.com/');
  }
}
