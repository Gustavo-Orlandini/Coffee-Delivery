
import Logo from '../../assets/logo-header.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';

import styles from './header.module.css'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { coffeeList } = useContext(CoffeeContext)
  const quantityInCart = coffeeList.length
  const emptyListaCoffee = quantityInCart <= 0

  return (
    <nav
      className={styles.content}>

      <NavLink to="/" title="Logo" >
        <img src={Logo} alt="Imagem da logomarca do Ignite" />
      </NavLink>

      <div className={styles.menu}>
        <div className={styles.locale}>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </div>

        <NavLink
          onClick={() => {
            if (emptyListaCoffee)

              toast.warn('Para ir ao carrinho de compras, você deve primeiro adicionar algum ítem abaixo!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
          }}
          to={emptyListaCoffee ? '' : '/checkout'}
          title="Clique para ir ao carrinho de compras">

          <button disabled={emptyListaCoffee} className={styles.shoppingCart}>
            {quantityInCart >= 1 ? <span title={`Você tem ${quantityInCart} pedido(os) adicionados ao seu carrinho de compras!`} className={styles.lenghtCart}>{quantityInCart}</span> : ''}

            <ShoppingCart size={22} weight="fill" />
          </button>
        </NavLink>
      </div>

    </nav>
  )
}
