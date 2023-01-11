import styles from './home.module.css'
import MainImg from '../../../assets/main-img.svg'
import backgroundImg from '../../../assets/Background.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { MenuListCoffet } from '../../MenuListCoffe'

export function Home() {
  return (

    <div className={styles.infoMain}>

      <div className={styles.absolute}>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

        <section className={styles.features}>

          <div className={styles.envolt}>
            <div className={styles.firstIcon}>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <p>Compra simples e segura</p>
          </div>

          <div className={styles.envolt}>
            <div className={styles.secondIcon}>
              <Package size={16} weight="fill" />
            </div>
            <p>Compra simples e segura</p>
          </div>

          <div className={styles.envolt}>
            <div className={styles.thirdIcon}>
              <Timer size={16} weight="fill" />
            </div>
            <p>Entrega rápida e rastreada</p>
          </div>

          <div className={styles.envolt}>
            <div className={styles.fourthIcon}>
              <Coffee size={16} weight="fill" />
            </div>
            <p>O café chega fresquinho até você</p>
          </div>

        </section>
      </div>

      <img src={MainImg} alt="" />

    </div>

  )
}
<MenuListCoffet />

