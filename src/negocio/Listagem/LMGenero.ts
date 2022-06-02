import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class psGenero extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listar(): void {
        let armazenarProdutosFeminino: any = []
        let armazenarServicoFeminino: any = []
        let armazenarProdutosMasculino: any = []
        let armazenarServicoMasculino: any = []
        this.cliente.filter(m => m.genero == 'Masculino').map(i => {
            i.getProdutosConsumidos.forEach(pMen => {
                let nomeProduto = pMen.nome
                let armazenarProduto = armazenarProdutosMasculino[pMen.nome] = (armazenarProdutosMasculino[pMen.nome] || 0) + 1
                armazenarProdutosMasculino.push({
                    nomeProduto: nomeProduto,
                    quantidade: armazenarProduto
                })
            })
            i.getServicosConsumidos.forEach(sMen => {
                let nomeServico = sMen.nome
                let armazenarServicos = armazenarServicoMasculino[sMen.nome] = (armazenarServicoMasculino[sMen.nome] || 0) + 1
                armazenarServicoMasculino.push({
                    nomeServico: nomeServico,
                    quantidade: armazenarServicos
                })
            })
        })
        this.cliente.filter(m => m.genero == 'Feminino').map(i => {
            i.getProdutosConsumidos.forEach(pFen => {
                let nomeProduto = pFen.nome
                let armazenarProduto = armazenarProdutosFeminino[pFen.nome] = (armazenarProdutosFeminino[pFen.nome] || 0) + 1
                armazenarProdutosFeminino.push({
                    nomeProduto: nomeProduto,
                    quantidade: armazenarProduto
                })
            })
            i.getServicosConsumidos.forEach(sFen => {
                let nomeServico = sFen.nome
                let armazenarServicos = armazenarServicoFeminino[sFen.nome] = (armazenarServicoFeminino[sFen.nome] || 0) + 1
                armazenarServicoFeminino.push({
                    nomeServico: nomeServico,
                    quantidade: armazenarServicos
                })

            })
        })
        let ordenacaoMasculinoProdutos = armazenarProdutosMasculino.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let ordenacaoMasculinoServicos = armazenarServicoMasculino.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let restricaoM = ordenacaoMasculinoProdutos.slice(0, 1)
        console.log();
        console.log(`Produto mais consumido Masculino`);
        restricaoM.forEach((consumidos: { nomeProduto: string, quantidade: string }) => {
            console.log(`Nome: ${consumidos.nomeProduto}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
        })
        restricaoM = ordenacaoMasculinoServicos.slice(0, 1)
        console.log();
        console.log(`Serviço mais consumido Masculino`);
        restricaoM.forEach((consumidos: { nomeServico: string, quantidade: string }) => {
            console.log(`Nome: ${consumidos.nomeServico}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
            console.log();
        })
        let ordenacaoFemininaProdutos = armazenarProdutosFeminino.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let ordenacaoFemininaServicos = armazenarServicoFeminino.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let restricaoF = ordenacaoFemininaProdutos.slice(0, 1)
        console.log();
        console.log(`Produto mais consumido Feminino`);
        restricaoF.forEach((consumidos: { nomeProduto: string, quantidade: string }) => {
            console.log(`Nome: ${consumidos.nomeProduto}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
        })
        restricaoF = ordenacaoFemininaServicos.slice(0, 1)
        console.log();
        console.log(`Servico mais consumido Feminino`);
        restricaoF.forEach((consumidos: { nomeServico: string, quantidade: string }) => {
            console.log(`Nome: ${consumidos.nomeServico}`);
            console.log(`Quantidade consumida ${consumidos.quantidade}`);
            console.log();
        })

    }
}