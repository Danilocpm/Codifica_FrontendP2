import { useAuth } from "../context/Auth"

export function Header() {
    const {user, login, logout} = useAuth()

    return (
        <header>
            {user ? (
                <>
                    <span>Ola, {user.name}!</span>
                    <button onClick={logout}>Sair</button>
                </>
            ): (
                <button onClick={() => login("Jaques")}>Entrar</button>
            )}
        </header>
    )
}