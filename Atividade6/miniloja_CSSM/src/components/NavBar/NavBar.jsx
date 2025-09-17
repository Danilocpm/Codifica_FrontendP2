import { NavLink } from 'react-router-dom'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useCart } from '../../context/CartContext'
import styles from "./Navbar.module.css"

export function NavBar() {
    const { cart } = useCart()


    return (
        <header>
            <div className={styles['content']}>
                <NavLink to='/' className= {styles["logo"]}>Shopping</NavLink>

                <nav className={styles['actions']}>
                    <div className={styles['nav-links']}>
                        <NavLink to='/' className={({ isActive }) => isActive ? `${styles['nav-link']} ${styles['active']}` : styles['nav-link']}>Pagina Inicial</NavLink>
                        <NavLink to='/cart' className={({ isActive }) => isActive ? `${styles['nav-link']} ${styles['active']}` : styles['nav-link']}>Carrinho</NavLink>
                    </div>
                </nav>

                <ThemeSwitcher/>

                <div className={styles["cart"]}>
                    <span>{cart.length}</span>
                    <span>🛒</span>
                </div>
            </div>
        </header>
    )
}