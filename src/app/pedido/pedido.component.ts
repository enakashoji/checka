import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../service/pedidos/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  constructor(private pedido: PedidoService) {}

  ngOnInit(): void {
    this.lista().then((res) => console.log(res));
  }

  async lista(): Promise<void> {
    this.pedido.listaPedidos();
  }
}
