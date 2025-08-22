// Exercício 1: Crie um componente React chamado Product que exiba um formulário para cadastro de produtos com 
// campos de nome, preço, categoria (select) e descrição; valide que todos os campos estejam preenchidos e que o 
// preço seja maior que zero (exibindo erro em vermelho se falhar); armazene cada produto num array no estado (incluindo id único, nome, preço formatado, categoria e descrição); mostre-os em uma lista filtrável por categoria ("Todos" ou cada categoria) e permita remover individualmente cada item.

import { useState, useEffect } from "react";

function FormsProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("Todos");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()


        if (!name || !price || !category || !desc) return setError("Todos os campos sao obrigatorios")

        if (Number(price) <= 0) return setError("Produtos nao podem ter valores negativos")

        setError("")

        const newProduct = {
            id: Date.now(),
            name,
            price: Number(price).toFixed(2),
            category,
            desc,
        }

        setProducts([...products, newProduct])

        setName("")
        setPrice("")
        setCategory("")
        setDesc("")
    }


    const handleRemove = (id) => {
        setProducts(products.filter((p) => p.id !== id))
    }

    const filteredProducts =
        filter === "Todos"
            ? products
            : products.filter((p) => p.category === filter)


    return (
        <div>
            <h2>Cadastro de Produto</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Preço"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione a categoria</option>
                    <option value="Eletrônicos">Eletrônicos</option>
                    <option value="Roupas">Roupas</option>
                    <option value="Alimentos">Alimentos</option>
                </select>
                <textarea
                    placeholder="Descrição"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <h3>Produtos</h3>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="Todos">Todos</option>
                <option value="Eletrônicos">Eletrônicos</option>
                <option value="Roupas">Roupas</option>
                <option value="Alimentos">Alimentos</option>
            </select>

            <ul>
                {filteredProducts.map((p) => (
                    <li key={p.id}>
                        <strong>{p.name}</strong> - R${p.price} <br />
                        <em>{p.category}</em> | {p.desc}
                        <button onClick={() => handleRemove(p.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FormsProduct
