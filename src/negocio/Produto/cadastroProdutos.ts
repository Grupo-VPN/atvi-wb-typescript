import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nCadastre seu produto`);
        let produto = this.entrada.receberTexto(`Qual é o nome do produto: `)
        let nomes = this.produtos.map(i => (i.nome))
        if (nomes.includes(produto)) {
            console.log(`${produto} já existe dentro do sistema`);
            console.log();
        } else {
            let preco = this.entrada.receberNumero(`Qual é o preço do produto? R$`)
            let cadastrar = new Produto(produto, preco);
            this.produtos.push(cadastrar);
            console.log();
        }
    }
    public geracao(): void {
        let produtos = [
            "cotonetes",
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        let preco = [
            50.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
        ]
        let sliceProdutos = produtos.slice();
        let sliceProdutosPreco = preco.slice()
        for (let index = 0; index < sliceProdutos.length; index++) {
            let adicionandoProdutos = new Produto(sliceProdutos[index], sliceProdutosPreco[index])
            this.produtos.push(adicionandoProdutos)
        }
    }
}