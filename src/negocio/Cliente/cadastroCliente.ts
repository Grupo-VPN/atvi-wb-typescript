import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.servicos = servicos;
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public cadastrar(): Cliente {
        console.log(`\nInício do cadastro do cliente`);
        //NOME
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Qual é o genero: Masculino ou Feminino `)
        //CPF
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        //RG
        valor = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        partesData = data.split('/')
        ano = new Number(partesData[2].valueOf()).valueOf()
        mes = new Number(partesData[1].valueOf()).valueOf()
        dia = new Number(partesData[0].valueOf()).valueOf()
        dataEmissao = new Date(ano, mes, dia)
        let rg = new RG(valor, dataEmissao)
        cliente.getRgs.push(rg);
        let novo = this.entrada.receberTexto(`Digitar outro RG? Sim / Não ? `)
        while (novo == 'Sim' || novo == 'sim') {
            valor = this.entrada.receberTexto(`Por favor informe o número do RG: `);
            data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
            partesData = data.split('/')
            ano = new Number(partesData[2].valueOf()).valueOf()
            mes = new Number(partesData[1].valueOf()).valueOf()
            dia = new Number(partesData[0].valueOf()).valueOf()
            dataEmissao = new Date(ano, mes, dia)
            let rg = new RG(valor, dataEmissao)
            cliente.getRgs.push(rg);
            novo = this.entrada.receberTexto(`Digitar outro RG? Sim / Não ? `)
        }
        // Telefone
        let tell = this.entrada.receberTexto(`Por favor digite o numero do telefone no padrão DDD NUMERO:`);
        let partesTell = tell.split(' ')
        let ddd = new String(partesTell[0].valueOf()).valueOf()
        let numero = new String(partesTell[1].valueOf()).valueOf()
        let telefone = new Telefone(ddd, numero)
        cliente.getTelefones.push(telefone)
        novo = this.entrada.receberTexto(`Digitar outro Telefone? Sim / Não ? `)
        while (novo == 'Sim' || novo == 'sim') {
            let tell = this.entrada.receberTexto(`Por favor digite o numero do telefone no padrão DDD NUMERO:`);
            let partesTell = tell.split(' ')
            let ddd = new String(partesTell[0].valueOf()).valueOf()
            let numero = new String(partesTell[1].valueOf()).valueOf()
            let telefone = new Telefone(ddd, numero)
            cliente.getTelefones.push(telefone)
            novo = this.entrada.receberTexto(`Digitar outro RG? Sim / Não ? `)
        }
        cliente.getDataCadastro.getDay
        //PRODUTOS
        console.log(`Digite os produtos consumidos no padrão: \nProduto A, Produto B, Produto C.... ou apenas Produto A: `)
        nome = this.entrada.receberTexto(`Nome dos produtos: `)
        let sliceProdutos = nome.split(', ');
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            if (nomes.includes(sliceProdutos[index])) {
                let pegarPreco = this.produtos.filter(produto => produto.nome == nome).map(i => { return i.preco }).toString()
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            } else {
                let preco = this.entrada.receberNumero(`Defina o preço para "${sliceProdutos[index]}" R$`)
                let sliceProdutosPreco = preco.toString().split(', ')
                let produtoNovo = new Produto(sliceProdutos[index], Number(sliceProdutosPreco))
                this.produtos.push(produtoNovo)
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //SERVICOS
        console.log(`Digite os serviços consumidos no padrão: \nServiço A, Serviço B, Serviço C.... ou apenas Serviço A: `)
        nome = this.entrada.receberTexto(`Nome dos serviços: `)
        let sliceServico = nome.split(', ');
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            if (nomes.includes(sliceServico[index])) {
                let pegarPreco = this.servicos.filter(servico => servico.nome == nome).map(i => { return i.preco }).toString()
                let servicoNovo = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(servicoNovo)
            } else {
                let preco = this.entrada.receberNumero(`Defina o preço para "${sliceServico[index]}" R$`)
                let sliceServicoPreco = preco.toString().split(', ')
                let servicoNovo = new Servico(sliceServico[index], Number(sliceServicoPreco))
                this.servicos.push(servicoNovo)
                cliente.getServicosConsumidos.push(servicoNovo)
            }
        }
        //Push geral 
        this.clientes.push(cliente);
        console.log(`\nCadastro concluído :)\n`);
        return cliente
    }
}