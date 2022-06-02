import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProduto extends Listagem {
    private produtos: Array<Produto>;
    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nListagem dos Produtos: \n`)
        this.produtos.forEach((produto, index) => {
            console.log(`--------------------------------------`);
            console.log(`${index + 1} - ` + produto.nome + `\nR$` + produto.preco);
            console.log(`--------------------------------------`);
        })
    }
}