import { NavLink } from 'react-router-dom'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useCart } from '../hooks/UseCart'

export function NavBar() {
    const { cart } = useCart()


    return (
        <header>
            <div>
                <NavLink to='/' className= "logo">Shopping</NavLink>

                <nav>
                    <div>
                        <NavLink to='/' className={({ isActivate }) => isActivate ? "nav-link active" : "nav-link"}>Pagina Inicial</NavLink>
                        <NavLink to='/cart' className={({ isActivate }) => isActivate ? "nav-link active" : "nav-link"}>Carrinho</NavLink>
                    </div>
                </nav>

                <ThemeSwitcher/>

                <div className="cart">
                    <span>{cart.length}</span>
                </div>
            </div>
        </header>
    )
}