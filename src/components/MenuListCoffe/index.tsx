import styles from './menuListCoffee.module.css'
import { COFFEE_IMAGES } from '../../constants/coffeeImgs'
import dados from '../../mocks/dados.json'



export function MenuListCoffee() {
    return (
        <div className={styles.menuContainer}>

            <h2>Nossos cafés</h2>

            <div className={styles.menuCards}>
                {dados.map((coffee) => {
                    return (

                        <div className={styles.card}>
                            <img src={COFFEE_IMAGES[coffee.id]} alt="" />

                            <span>TRADICIONAL</span>

                            <h3>{coffee.title}</h3>
                        </div>)
                })}
            </div>

        </div>


    )
}