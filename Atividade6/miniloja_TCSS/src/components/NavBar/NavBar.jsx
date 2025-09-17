import { NavLink } from 'react-router-dom'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useCart } from '../../context/CartContext'

export function NavBar() {
    const { cart } = useCart()


    return (
        <header className="fixed top-0 inset-x-0 h-16 bg-[--color-surface] border-b border-[--color-border] z-50 shadow-sm">
            <div className='max-w-screen-xl h-full mx-auto px-4 flex items-center justify-between gap-4'>
                <NavLink to='/' className= "inline-flex items-center gap-2 text-[--color-fg-strong] no-underline font-bold tracking-tight">Shopping</NavLink>

                <nav className='inline-flex items-center gap-3'>
                    <div className='inline-flex items-center gap-2.5 bg-[--color-surface-2] border border-[--color-border] rounded-full p-1.5 px-2'>
                        <NavLink to='/' className={({ isActive }) => isActive ? "no-underline p-1.5 px-2 rounded-full text-[--color-fg] font-semibold transition-all duration-180 ease-in-out bg-[var(--color-accent)] text-white" : "no-underline p-1.5 px-2 rounded-full text-[--color-fg] font-semibold transition-all duration-180 ease-in-out hover:-translate-y-px hover:bg-[--color-surface-3]"}>Pagina Inicial</NavLink>
                        <NavLink to='/cart' className={({ isActive }) => isActive ? "no-underline p-1.5 px-2 rounded-full text-[--color-fg] font-semibold transition-all duration-180 ease-in-out bg-[var(--color-accent)] text-white" : "no-underline p-1.5 px-2 rounded-full text-[--color-fg] font-semibold transition-all duration-180 ease-in-out hover:-translate-y-px hover:bg-[--color-surface-3]"}>Carrinho</NavLink>
                    </div>
                </nav>

                <ThemeSwitcher/>

                <div className="inline-flex items-center gap-1.5 bg-[--color-surface-2] border border-[--color-border] rounded-full p-1.5 px-2">
                    <span>{cart.length}</span>
                    <span>🛒</span>
                </div>
            </div>
        </header>
    )
}