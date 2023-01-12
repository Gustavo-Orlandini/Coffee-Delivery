import styles from './home.module.css'
import MainImg from '../../../assets/main-img.svg'
import backgroundImg from '../../../assets/Background.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { MenuListCoffet } from '../../MenuListCoffe'
import { Feature } from './components/Feature'

export function Home() {
  return (

    <div className={styles.infoMain}>

      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p className={styles.subtitle}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <section className={styles.features}>

          <Feature text='Compra simples e segura' color='yellow-dark' icon={
            <ShoppingCart size={16} weight="fill" />
          } />

          <Feature text='Embalagem mantém o café intacto' color='base-text' icon={
            <Package size={16} weight="fill" />
          } />

          <Feature text='Entrega rápida e rastreada' color='yellow' icon={
            <Timer size={16} weight="fill" />
          } />

          <Feature text='O café chega fresquinho até você' color='purple' icon={
            <Coffee size={16} weight="fill" />
          } />

        </section>
      </div>

      <img src={MainImg} alt="" />

    </div>

  )
}
<MenuListCoffet />

