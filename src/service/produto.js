import  Produto from "../model/produto.js";

class ServiceProduto {
    async PegarTodos() {
        return Produto.findAll()
    }

    async PegarUm(id) {}

    async Criar(nome, disponivel, qtde) {
        Produto.create({nome, disponivel, qtde})
    }

    async Alterar(id, nome, disponivel, qtde) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const produto = await User.findByPk(id)

        if (!produto) {
            throw new Error(`Produto ${id} não encontrado`)
        }

        produto.nome = nome
        produto.disponivel = disponivel
        produto.qtde = qtde
        await produto.save()
    }

    async Deletar(id) {}
}

export default new ServiceProduto()