function Produto(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.desc}</h2>
            <h2>{props.preco}</h2>

        </div>
    )

}

function Aplicativo() {
    const produto = {
        nome: 'Batata',
        desc: 'Isso e uma batata',
        preco: 5
    }

    return (
        <div>
            <Produto name={produto.nome} desc={produto.desc} preco={produto.preco}/>
        </div>
    )
}

export default Aplicativo