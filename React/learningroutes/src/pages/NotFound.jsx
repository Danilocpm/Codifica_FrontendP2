import { Link } from "react-router-dom"


export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Pagina nao encontrada</p>

            <Link to="/">Voltar para Home</Link>
        </div>
    )
}