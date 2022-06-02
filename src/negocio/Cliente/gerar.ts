import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Gerar from "../gerar"

export default class GeracaoDeCliente extends Gerar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    public geracao(): void {
        let nome = "Gabriel Souza Bicho Nunes"
        let nomeSocial = "Zero"
        let genero = "Masculino"
        //
        let valor = "243.308.954-98";
        let date = new Date()
        date.getDate()
        let cpf = new CPF(valor, date);
        //
        let cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "24.025.189-1"
        let rg = new RG(valor, date)
        //
        let ddd = "12"
        let numero = "991721721"
        let telefone = new Telefone(ddd, numero)
        //
        let produtos = [
            "Lixa",
            "cotonetes",
            "Shampoo Clear Men de cacau"
        ]
        let sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        let servico = [
            "corte de cabelo",
            "modelagem e corte de barba",
            "tratamento para quedas de cabelo"]
        let sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Lucas Bicho Nunes"
        nomeSocial = "Lushkaz"
        genero = "Masculino"
        //
        valor = "111.111.11-11";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "11.111.111-1"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "11111111"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Lixa",
            "Sabonete DOVE",
            "Shampoo Clear Men de cacau",
            "Fio dental",
            "Lenços",
            "sabonetes antiacne",
            "protetor solar em spray",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "corte de cabelo",
            "modelagem e corte de barba"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Mara Bicho Nunes"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "222.222.22-22";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "22.22.222-2"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "22222222"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Lixa",
            "Sabonete DOVE",
            "Fio dental",
            "Creme Pantene",
            "cotonetes",
            "Escova de dente Colgate",
            "sabonetes antiacne",
            "protetor solar em spray",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "corte de cabelo",
            "redução de medidas",
            "venda de produtos especializados"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Sergio Luiz Nunes"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "333.333.333-33";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "33.33.333-3"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "3333333333"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Fio dental",
            "Creme Pantene",
            "Escova de dente Colgate",
            "sabonetes antiacne",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "corte de cabelo"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Pedro Ferreira Neto"
        nomeSocial = "Pedro F.N"
        genero = "Masculino"
        //
        valor = "444.444.444-44";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "44.44.444-4"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "4444444444"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Fio dental",
            "Lixa",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "corte de cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Marcia Bicho Nunes"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
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
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "venda de produtos especializados",
            "tratamento para quedas de cabelo",
            "remoção  de  rugas",
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "aplicação de botox",
            "tratamento para emagrecimento",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Marta Bicho Nunes"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "666.666.666-66";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "66.66.66-6"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "666666666666"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
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
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "venda de produtos especializados",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "aplicação de botox",
            "tratamento para emagrecimento",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Maria Luiz Ferreira"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "777.777.777-77";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "77.77.777-7"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "777777777777"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "venda de produtos especializados",
            "tratamento para emagrecimento",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Bruna Ferreira"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "888.888.888-88";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "88.88.888-8"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "888888888888"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Lixa",
            "Lenços",
            "cotonetes",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "corte de cabelo",
            "remoção  de manchas na pele",
            "aplicação de botox",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Daniel Orivaldo da Silva"
        nomeSocial = "é verdade"
        genero = "Masculino"
        //
        valor = "123.132.123-123";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "123.123.123-2"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "213123123"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Creme de barbear",
            "Desodorante Old Spice",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "tratamento para quedas de cabelo",
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Megaman X"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete LUX",
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Antisséptico bucal",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Zero"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Pente",
            "Creme de barbear",
            "Desodorante Old Spice",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "tratamento para quedas de cabelo",
            "corte de cabelo",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Axel"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "remoção  de  rugas",
            "modelagem e corte de barba",
            "corte de cabelo",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Professor Xavier"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Pente",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "corte de cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Jinx do pokemon"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Fio dental",
            "Pente",
            "Antisséptico bucal",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "aplicação de botox",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Hatsune Miku"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Antisséptico bucal",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "aplicação de botox",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Lord Of GodFredo"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Pente",
            "Lixa",
            "Lenços",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Baby Metal"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Lixa",
            "Lenços",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "tratamento para quedas de cabelo",
            "tratamento para emagrecimento",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        //
        nome = "Ponk Mix"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Escova de dente Colgate",
            "Fio dental",
            "Pente",
            "Esmalte purpuro",
            "Antisséptico bucal",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "tratamento para quedas de cabelo",
            "remoção  de  rugas",
            "modelagem e corte de barba",
            "aplicação de botox",
            "tratamento para emagrecimento",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        //
        nome = "Viktor Hex"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
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
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "tratamento para quedas de cabelo",
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        //
        nome = "Itachi"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Esmalte purpuro",
            "Lixa",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Kakashi"
        nomeSocial = "Ninja que copia"
        genero = "Feminino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "corte de cabelo",
            "remoção  de manchas na pele",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Murilo Fattore"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Ronaldo Garcias"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "tratamento para quedas de cabelo",
            "remoção  de  rugas",
            "modelagem e corte de barba",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        //
        nome = "Alice"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        //
        nome = "Lulamolusco"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
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
            "sabonetes para peles oleosas"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "tratamento para quedas de cabelo",
            "remoção  de  rugas",
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "aplicação de botox",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Seu Ziriguijo"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Sekai Datta Slime"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
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
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Victor & Leo"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "corte de cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Godofredo"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Lixa",
            "cotonetes",
            "Shampoo Clear Men de cacau"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "remoção  de  rugas",
            "corte de cabelo",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
    }
}
