import Produto from "../../models/Produto";

interface Product {
    nome_produto: string;
    descricao: string;
    preco_unitario: number;
    id_usuario: number;
}

export const CreateProductService = async ({nome_produto, descricao, preco_unitario, id_usuario}: Product) => {
    if (!id_usuario) return { error: 'Usuário inválido' }
    if (!nome_produto)return  { error: 'Nome do produto é requerido!' }
    if (!descricao) return { error: 'Descrição é requerido!' }
    if (!preco_unitario) { error: 'Preco é requerido!' }
    if (preco_unitario === 0.00) return { error: 'Preço inválido!' }

    const product = await Produto.create({ nome_produto, descricao, preco_unitario, id_usuario })
    return product;
}