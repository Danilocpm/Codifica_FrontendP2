
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useCart } from '../../context/CartContext'

const Header = styled.header`
    position: fixed;
    top: 0;
    inset-inline: 0;
    height: 64px;
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    z-index: 100;
    box-shadow: var(--shadow-sm);
`;

const Content = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

const Actions = styled.nav`
    display: inline-flex;
    align-items: center;
    gap: 12px;
`;

const NavLinks = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--color-surface-2);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    padding: 6px 8px;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 999px;
    color: var(--color-fg);
    font-weight: 600;
    transition: background 180ms ease, color 180ms ease, transform 180ms ease;

    &:hover {
        transform: translateY(-1px);
        background: var(--color-surface-3);
    }

    &.active {
        background: var(--color-accent);
        color: #fff;
    }
`;

const Logo = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--color-fg-strong);
    text-decoration: none;
    font-weight: 700;
    letter-spacing: -0.02em;
`;

const Cart = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--color-surface-2);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    padding: 6px 10px;
`;

export function NavBar() {
    const { cart } = useCart()


    return (
        <Header>
            <Content>
                <Logo to='/'>Shopping</Logo>

                <Actions>
                    <NavLinks>
                        <StyledNavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>Pagina Inicial</StyledNavLink>
                        <StyledNavLink to='/cart' className={({ isActive }) => isActive ? "active" : ""}>Carrinho</StyledNavLink>
                    </NavLinks>
                </Actions>

                <ThemeSwitcher/>

                <Cart>
                    <span>{cart.length}</span>
                    <span>🛒</span>
                </Cart>
            </Content>
        </Header>
    )
}
