export interface PedidoModel {
  numero: number;
  produto: {
    id: number;
    nome: string;
    descricao: string;
    metrica: string;
    perecivel: true;
  };
  observacao: string;
  quantidade: number;
  situacao: string;
  data: string;
}
