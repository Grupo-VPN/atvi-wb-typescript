import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Delete from "../delete";

export default class deleteProduto extends Delete {
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super()
        this.produto = produto
        this.entrada = new Entrada();
    }
    public delete(): void {
        console.log();
        console.log(`Lista de todos os Produtos`);
        this.produto.forEach(p => {
            console.log(`Produto: ${p.nome}`);
        })
        console.log();
        let entrada = this.entrada.receberTexto(`Nome do produto que deseja deletar: `)
        let todosProdutos = this.produto.map(i => i.nome)
        let indexProdutos = todosProdutos.indexOf(entrada)

        if (indexProdutos == -1) {
            console.log(`Produto ${entrada} não encontrado`);
        } else {
            let execucao = true
            while (execucao) {
                console.log();
                console.log(`Tem certeza que deseja deletar o produto?`);
                console.log(`1 - Sim`);
                console.log(`2 - Não`);
                let valor = this.entrada.receberNumero(`Digite a opção: `)
                switch (valor) {
                    case 1:
                        this.produto.map(i => {
                            if (entrada === i.nome) {
                                let index = this.produto.indexOf(i)
                                this.produto.splice(index, 1)
                            }
                        })
                        console.log(`Produto Deletado com sucesso`);
                    case 2:
                        execucao = false
                        break;
                }
            }
        }
    }
}