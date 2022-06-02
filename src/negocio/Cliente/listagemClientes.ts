import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente, index) => {
            console.log(`Data de cadastro: ` + cliente.getDataCadastro.toLocaleDateString());
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Genero: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`RG: ` + cliente.getRgs[0].getValor);
            console.log(`Telefone: ` + cliente.getTelefones[0].getDdd + ` ` + cliente.getTelefones[0].getNumero)
            console.log(`--------------------------------------`);
            console.log(`Listagem de Produtos consumidos`);
            cliente.getProdutosConsumidos.map(produtos => {
                console.log(produtos.nome + `\nR$${produtos.preco}`);
            })
            console.log(`--------------------------------------`)
            console.log(`Listagem de Servicos Consumidos`);
            cliente.getServicosConsumidos.map(servicos => {
                console.log(servicos.nome + `\nR$${servicos.preco}`);
            })
            console.log(`--------------------------------------`)
            console.log(` `);
        });
        console.log(`\n`);

    }
}