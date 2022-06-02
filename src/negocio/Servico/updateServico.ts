import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Update from "../update";

export default class updateServico extends Update {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada();
    }
    public update(): void {
        console.log(`\nLista de todos os Servicos`)
        this.servicos.forEach((servico) => {
            console.log(`Serviço: ` + servico.nome);
        })
        let todosServicos = this.servicos.map(i => i.nome);
        let entrada = this.entrada.receberTexto(`Escolha qual servico escrevendo o nome: `)
        let indexServico = todosServicos.indexOf(entrada)
        if (indexServico == -1) {
            console.log(`Serviço ${entrada} não existe`);
        } else {
            let novoNome = this.entrada.receberTexto(`Digite o novo nome do Serviço: `)
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do Produto: R$`)
            this.servicos.filter(servico => servico.nome == entrada).map(i => i.preco = novoPreco).toString()
            this.servicos.filter(servico => servico.nome == entrada).map(i => i.nome = novoNome).toString()
            console.log(`Serviço alterado com sucesso`);
        }
    }
}