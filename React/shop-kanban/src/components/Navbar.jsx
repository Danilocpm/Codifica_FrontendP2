import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar({ cartCount, theme, onToggleTheme }) {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <NavLink to='/' className={styles.logo}>
                    <strong>Shopping</strong>
                </NavLink>



                <nav className={styles.actions}>
                    <div className={styles.navLinks}>
                        <NavLink to="/"
                            className={({ isActivate }) => isActivate ? `${styles.NavLink} ${styles.active}` : styles.navLink}
                        >Catalogo</NavLink>
                        <NavLink
                            to="/kanban"
                            className={({ isActivate }) => isActivate ? `${styles.NavLink} ${styles.active}` : styles.navLink}
                        >Kanban</NavLink>
                    </div>

                    <button
                        type='button'
                        className={styles.themeToggle}
                        onClick={onToggleTheme}
                        aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
                        aria-pressed={theme === 'dark'}

                    > {/* abre botao */}
                        <span className={styles.themeThumb} aria-hidden="true" /> {/* Polegar deslizante */}
                        <span className={styles.themeText}> {/* texto do toggle */}
                            {theme === 'dark' ? 'Escuro' : 'Claro'} {/* texto */}
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
