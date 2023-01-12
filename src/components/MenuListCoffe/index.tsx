import styles from './menuListCoffee.module.css'
import { COFFEE_IMAGES } from '../../constants/coffeeImgs'
import dados from '../../mocks/dados.json'
import { ShoppingCart } from 'phosphor-react';

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

                        <div className={styles.card}>

                            <div className={styles.clouds}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <img src={COFFEE_IMAGES[coffee.id as keyof typeof COFFEE_IMAGES]} style={{
                                    width: "7.5rem",
                                    height: "7.5rem",
                                    marginTop: "-1.25rem",
                                }} alt="" />
                            </div>

                            <div className={styles.tags}>
                                {coffee.tags.map((tag) => {
                                    return (
                                        <span
                                            style={{
                                                background: "var(--yellow-light)",
                                                color: "var(--yellow-dark)",
                                                borderRadius: "50px",
                                                fontSize: "0.625rem",
                                                fontWeight: 700,
                                                padding: "0.2rem 0.5rem"
                                            }}>
                                            {tag}
                                        </span>
                                    )

                                })}
                            </div>

                            <h3>{coffee.title}</h3>

                            <p>{coffee.description}</p>

                            <div className={styles.footerContainer}>

                                <div className={styles.priceContainer}>
                                    <p>R$</p>
                                    <span>{coffee.price}</span>
                                </div>
                                <div className={styles.quantityContainer}>
                                    <button>-</button>
                                    <input type="number" />
                                    <button>+</button>

                                    <div>
                                        <ShoppingCart fill='' />
                                    </div>

                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>

        </div>


    )
}