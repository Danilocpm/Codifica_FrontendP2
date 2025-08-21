import { useState, useEffect} from 'react'

function LifeCycleFunctionalComponent() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log("Component Montado!")

        return() => {
            console.log("Component sera desmontado!")
        }
    }, [])

    useEffect(() => {
        console.log("Componente Atualizado!")
    }, [count])

    return (
            <div>
                <p>Contagem: {count} </p>
                <button onClick={increment}>Incrementar</button>
            </div>
        )
    
}

export default LifeCycleFunctionalComponent