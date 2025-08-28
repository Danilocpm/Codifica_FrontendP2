import { useParams, Link } from "react-router-dom"


export default function Post() {
    const { id } = useParams()

    return (
        <section>
            <h1>Post #{id}</h1>
            <p>Aqui estariam os dados de fulano de tal #{id}</p>

            <p>
                Ver outro post relacionado <Link to={"/posts/10"}>Posts/10</Link>
            </p>
        </section>

    )
}