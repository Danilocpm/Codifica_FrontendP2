import { Component } from "react";

class LifeCycleClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }

    componentDidMount() {
        console.log("Componente Montado!")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Atualizado! Propriedades e componentes anteriores:", prevProps, prevState)
    }

    componentWillUnmount() {
        console.log("Componente sera desmontado")
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <p>Contagem: {this.state.count} </p>
                <button onClick={this.increment}>Incrementar</button>
            </div>
        )
    }
}

export default LifeCycleClassComponent