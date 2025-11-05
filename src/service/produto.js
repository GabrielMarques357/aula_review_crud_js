import  Produto from "../model/produto.js";

class ServiceProduto {
    async PegarTodos() {
        return Produto.findAll()
    }

    async PegarUm(id) {
        if(!id) {
            throw new Error('Favor informar o ID')
        }

        const produto = await Produto.findByPk(id)

        if (!produto) {
            throw new Error(`Produto ${produto} não encontrato`)
        }

        return produto
    }

    async Criar(nome, disponivel, qtde) {
        Produto.create({nome, disponivel, qtde})
    }

    async Alterar(id, nome, disponivel, qtde) {
        if (!id) {
            throw new Error("Favor informar todas as info.")
        }

        const produtoVelho = await Produto.findByPk(id)

        if (!produtoVelho) {
            throw new Error(`Produto ${id} não encontrado`)
        }

        produtoVelho.nome = nome || produtoVelho.nome
        produtoVelho.disponivel = disponivel || produtoVelho.disponivel
        produtoVelho.qtde = qtde || produtoVelho.qtde
        await produtoVelho.save()
    }

    async Deletar(id) {
        if(!id) {
            throw new Error('Favor informar o ID')
        }

        const produto = await Produto.findByPk(id)

        if (!produto) {
            throw new Error(`Produto ${produto} não encontrato`)
        }

        await produto.destroy()
    }
  }


export default new ServiceProduto()