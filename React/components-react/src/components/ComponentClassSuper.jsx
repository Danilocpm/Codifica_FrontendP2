import { Component } from "react";

class ComponentClassSuper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: this.props.nome

        }
    }

    render() {
        return <h1>Ola, {this.state.nome}</h1>
    }
}

function App() {
    return <ComponentClassSuper nome='Tais'/>
}