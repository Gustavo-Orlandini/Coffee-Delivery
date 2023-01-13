import styles from './menuListCoffee.module.css'
import { COFFEE_IMAGES } from '../../constants/coffeeImgs'
import dados from '../../mocks/dados.json'


import { CardCoffee } from '../pages/Home/components/CardCoffees/CardCoffee';

export function MenuListCoffee() {


    return (
        <div className={styles.menuContainer}>

            <h2>Nossos cafés</h2>

            <div className={styles.menuCards}>
                {dados.map((coffee) => {
                    if (!(coffee.id in COFFEE_IMAGES)) {
                        return null;
                    }
                    return (
                        <CardCoffee coffee={coffee} />
                    )
                })}
            </div>

        </div>


    )
}