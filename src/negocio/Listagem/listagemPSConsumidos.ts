import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class psConsumidos extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listar(): void {
        let armazenarProdutos: any = []
        this.cliente.map(i => {
            i.getProdutosConsumidos.forEach(i => {
                let nome = i.nome
                let quantidade = armazenarProdutos[i.nome] = (armazenarProdutos[i.nome] || 0) + 1
                armazenarProdutos.push({
                    quantidade: quantidade,
                    nome: nome,
                })
            }
            )
        })
        let ordenacao = armazenarProdutos.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let restricao = ordenacao.slice(0, 1)
        console.log(`Produto mais consumido`);
        restricao.forEach((consumidos: { nome: string, quantidade: string, genero: string }) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
            console.log();
        })
        let armazenarServiço: any = []
        this.cliente.map(i => i.getServicosConsumidos.forEach(i => {
            let nome = i.nome
            let quantidade = armazenarServiço[i.nome] = (armazenarServiço[i.nome] || 0) + 1
            armazenarServiço.push({
                quantidade: quantidade,
                nome: nome
            })
        }
        ))
        ordenacao = armazenarServiço.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        restricao = ordenacao.slice(0, 1)
        console.log(`Serviço mais Consumido`);
        restricao.forEach((consumidos: { nome: string, quantidade: string, genero: string }) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
            console.log();
        })










    }
}