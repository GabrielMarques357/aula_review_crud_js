import ServiceProduto from "../service/produto.js"

class controllerProduto {
    async PegarTodos(req, res) {
        try {
            const produtos = await ServiceProduto.PegarTodos()
            res.status(200).send({data: produtos})
        } catch (error) {
            res.status(500).send({ msg: error. message })
        }
    }

    async PegarUm(req, res) {
        try {
            res.status(200).send('oi')
        } catch (error) {
            res.status(500).send({ msg: error. message })
        }
    }

    async Criar(req, res) {
        try {
            const { nome, disponivel, qtde } = req.body

            await ServiceProduto.Criar(nome, disponivel, qtde)

            res.status(201).send()
        } catch (error) {
            res.status(500).send({ msg: error. message })
        }
    }

    async Alterar(req, res) {
        try {
            const { nome, disponivel, qtde } = req.body

            await ServiceProduto.Alterar(nome, disponivel, qtde)

            res.status(200).send()
        } catch (error) {
            res.status(500).send({ msg: error. message })
        }
    }

    async Deletar(req, res) {
        try {
            res.status(200).send('oi')
        } catch (error) {
            res.status(500).send({ msg: error. message })
        }
    }
}

export default new controllerProduto()