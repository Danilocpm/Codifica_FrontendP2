import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar({cartCount, theme, onToggleTheme}) {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <NavLink to='/' className={styles.logo}>
                <strong>Shopping</strong>
                </NavLink>



            <nav className={styles.actions}>
                <div className={styles.navLinks}>
                    <NavLink to="/" 
                    className={({isActivate}) => isActivate ? `${styles.NavLink} ${styles.active}` : styles.NavLink}
                    >Catalogo</NavLink>
                    <NavLink 
                    to="/kanban" 
                    className={({isActivate}) => isActivate ? `${styles.NavLink} ${styles.active}` : styles.NavLink}
                    >Kanban</NavLink>
                </div>

                <button 
                type='button' 
                onClick={onToggleTheme}

                >
                    <span className={styles.themeText}>
                        {theme == 'dark' ? 'Escuro' : 'Claro'}
                    </span>
                </button>

                <div className={styles.cart}>
                    <span className={styles.cartCount}>{cartCount}</span>
                </div>
            </nav>

            </div>


        </header>
    )
}
