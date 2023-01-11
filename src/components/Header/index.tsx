
import Logo from '../../assets/logo-header.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import styles from './header.module.css'

export function Header() {
  return (
    <div className={styles.aa}>
      <img src={Logo} alt="Imagem da logomarca do Ignite" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </div>
  )
}
