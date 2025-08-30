import { useAuth } from "../context/Auth"

export default function Home() {
    const {user, login, logout} = useAuth()


    return (
        <div>
            {user ? (
                <>
                <h2>Bem vindo, {user.name}</h2>
                <button onClick={logout}>Sair</button>
                </>
            ) :
            (
                <>
                <h2>Voce nao esta logado</h2>
                <button onClick={() => login("Danilo")}>Entrar</button>
                </>
            )}
        </div>
    )
}