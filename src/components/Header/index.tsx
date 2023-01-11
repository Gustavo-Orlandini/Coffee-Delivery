
import Logo from '../../assets/logo-header.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import styles from './header.module.css'

export function Header() {
  return (
    <div className={styles.content}>

      <NavLink to="/" title="Logo" >
        <img src={Logo} alt="Imagem da logomarca do Ignite" />
      </NavLink>

      <div className={styles.menu}>
        <div className={styles.locale}>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </div>

        <NavLink to="/checkout" title="Checkout">
          <div className={styles.shoppingCart}>
            <ShoppingCart size={22} weight="fill" />
          </div>
        </NavLink>
      </div>

    </div>
  )
}
