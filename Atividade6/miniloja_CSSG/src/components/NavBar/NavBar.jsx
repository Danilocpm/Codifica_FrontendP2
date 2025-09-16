import { NavLink } from 'react-router-dom'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useCart } from '../../context/CartContext'
import "./NavBar.css"

export function NavBar() {
    const { cart } = useCart()


    return (
        <header>
            <div className='content'>
                <NavLink to='/' className= "logo">Shopping</NavLink>

                <nav className='actions'>
                    <div className='nav-links'>
                        <NavLink to='/' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Pagina Inicial</NavLink>
                        <NavLink to='/cart' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Carrinho</NavLink>
                    </div>
                </nav>

                <ThemeSwitcher/>

                <div className="cart">
                    <span>{cart.length}</span>
                    <span>🛒</span>
                </div>
            </div>
        </header>
    )
}