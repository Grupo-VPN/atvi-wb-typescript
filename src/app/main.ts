import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
//Cliente
import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import updateCliente from "../negocio/Cliente/updateCliente";
import deleteCliente from "../negocio/Cliente/deleteCliente";
import GeracaoDeCliente from "../negocio/Cliente/gerar"
import ListagemClientes from "../negocio/Cliente/listagemClientes";
//Produto
import CadastroProduto from "../negocio/Produto/cadastroProdutos";
import updateProduto from "../negocio/Produto/updateProduto";
import deleteProduto from "../negocio/Produto/deleteProduto";
import ListagemProduto from "../negocio/Produto/listagemProduto";
//Servços
import CadastroServico from "../negocio/Servico/cadastroServico";
import updateServico from "../negocio/Servico/updateServico";
import ListagemServico from "../negocio/Servico/listagemServico";
import deleteServico from "../negocio/Servico/deleteServico";
//Listagem
import ListagemGenero from "../negocio/Listagem/listagemGenero";
import ListagemMenosQuantidade from "../negocio/Listagem/listagemClienteMenosConsumidor"
import listagemClienteValor from "../negocio/Listagem/ListagemClienteValor"
import ListagemQuantidade from "../negocio/Listagem/ListagemClienteConsumidor";
import psGenero from "../negocio/Listagem/LMGenero"
import psConsumidos from "../negocio/Listagem/listagemPSConsumidos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
let cadastroProduto = new CadastroProduto(empresa.getProdutos);
let cadastroServico = new CadastroServico(empresa.getServicos);
let gerarClientes = new GeracaoDeCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
cadastroServico.geracao();
cadastroProduto.geracao();
gerarClientes.geracao();
while (execucao) {
    console.log(`Opções:`);
    console.log(`-----CRUD CLIENTE-----`);
    console.log(`1 - Cadastrar cliente `);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar Cliente `);
    console.log(`4 - Deletar Cliente   `);
    console.log(`-----CRUD PRODUTO-----`);
    console.log(`5 - Cadastrar Produtos`);
    console.log(`6 - Listar Produtos   `);
    console.log(`7 - Atualizar Produtos`);
    console.log(`8 - Deletar Produtos  `);
    console.log(`-----CRUD SERVICO-----`);
    console.log(`9 - Cadastrar Serviços`);
    console.log(`10 - Listar Serviços   `);
    console.log(`11 - Atualizar Serviço`);
    console.log(`12 - Deletar Serviço  `);
    console.log(`-----Listagem-----`);
    console.log(`13 - Listar Por generos`);
    console.log(`14 - Listar Clientes que mais consumiram em quantidade`);
    console.log(`15 - Listar Clientes que menos consumiram`);
    console.log(`16 - Listar Produtos e Serviços mais consumidos`);
    console.log(`17 - Listar Produtos e Serviços mais consumidos por genero`);
    console.log(`18 - Listar dos clietes que mais consumiram por valor`);
    console.log(`0 - Sair`);
    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastro.cadastrar();
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            let updateClientes = new updateCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            updateClientes.update()
            break
        case 4:
            let deleteClientes = new deleteCliente(empresa.getClientes)
            deleteClientes.delete()
            break
        case 5:
            let cadastro_produto = new CadastroProduto(empresa.getProdutos)
            cadastro_produto.cadastrar();
            break;
        case 6:
            let listagem_produto = new ListagemProduto(empresa.getProdutos);
            listagem_produto.listar();
            break;
        case 7:
            let update_Produto = new updateProduto(empresa.getProdutos)
            update_Produto.update()

            break
        case 8:
            let delete_produto = new deleteProduto(empresa.getProdutos)
            delete_produto.delete()
            break
        case 9:
            let cadastro_servico = new CadastroServico(empresa.getServicos);
            cadastro_servico.cadastrar();
            break
        case 10:
            let listage_servico = new ListagemServico(empresa.getServicos);
            listage_servico.listar();
            break
        case 11:
            let update_servico = new updateServico(empresa.getServicos)
            update_servico.update()
            break
        case 12:
            let delete_servico = new deleteServico(empresa.getServicos)
            delete_servico.delete()
        case 13:
            let listage_genero = new ListagemGenero(empresa.getClientes);
            listage_genero.listar();
            break
        case 14:
            let mais_consumido = new ListagemQuantidade(empresa.getClientes)
            mais_consumido.listar()
            break
        case 15:
            let menos_consumido = new ListagemMenosQuantidade(empresa.getClientes)
            menos_consumido.listar()
            break
        case 16:
            let psMaisConsumidos = new psConsumidos(empresa.getClientes)
            psMaisConsumidos.listar()
            break
        case 17:
            let consumidoPorGenero = new psGenero(empresa.getClientes)
            consumidoPorGenero.listar()
            break
        case 18:
            let valorConsumido = new listagemClienteValor(empresa.getClientes)
            valorConsumido.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}