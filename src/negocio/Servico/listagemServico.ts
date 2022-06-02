import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServico extends Listagem {
    private servicos: Array<Servico>;
    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nListagem de Serviços\n`);
        this.servicos.forEach((servico, index) => {
            console.log(`--------------------------------------`);
            console.log(`${index + 1} - ` + servico.nome + `\nR$${servico.preco}`);
            console.log(`--------------------------------------`);
        })
    }
}