import { Component, OnInit } from '@angular/core';
import { PedidoModel } from 'src/model/pedido-model';
import { PedidosService } from '../service/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  lista: Array<PedidoModel> | undefined;
  selecionado: PedidoModel = {
    numero: 0,
    produto: {
      id: 0,
      nome: '',
      descricao: '',
      metrica: '',
      perecivel: true,
    },
    observacao: '',
    quantidade: 0,
    situacao: '',
    data: '',
  };
  constructor(private pedido: PedidosService) {}

  ngOnInit(): void {
    this.roda();
  }

  async handleButton(): Promise<void> {
    await this.pedido
      .detalheProduto(3)
      .subscribe((result) => (this.selecionado = result));
  }

  async roda(): Promise<void> {
    this.pedido.recuperaPedido().subscribe((item) => (this.lista = item));
  }
}
