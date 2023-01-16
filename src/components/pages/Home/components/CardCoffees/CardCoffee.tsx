import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { COFFEE_IMAGES } from '../../../../../constants/coffeeImgs';
import { MinusAndPlusButtonLARGE } from '../../../Checkout/components/MinusAndPlusButton/MinusAndPlusButtonLARGE';

import styles from './CardCoffees.module.css'

interface CardCoffeeProps {
    coffee: {
        id: string
        title: string
        description: string
        price: number
        tags: string[]

    }
}

export function CardCoffee(props: CardCoffeeProps) {
    const [enableSmoke, setEnableSmoke] = useState('')
    const [price, setPrice] = useState<number>(1)


    return (

        <div className={styles.card}>

            <div onMouseEnter={() => setEnableSmoke(props.coffee.id)} onMouseOut={() => setEnableSmoke('')} className={styles.clouds}>
                {enableSmoke === props.coffee.id ? (
                    <>
                        <span></span>
                        <span></span>
                    </>

                ) : null}
                <img src={COFFEE_IMAGES[props.coffee.id as keyof typeof COFFEE_IMAGES]} style={{
                    width: "7.5rem",
                    height: "7.5rem",
                    marginTop: "-1.25rem",

                }} alt="" />
            </div>

            <div className={styles.tags}>
                {props.coffee.tags.map((tag) => {
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

            <h3>{props.coffee.title}</h3>

            <p>{props.coffee.description}</p>

            <div className={styles.footerContainer}>

                <div className={styles.priceContainer}>
                    <p>R$</p>
                    <h3>{new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(props.coffee.price * price)}</h3>
                </div>

                <div className={styles.footerRightContainer}>

                    <MinusAndPlusButtonLARGE getPrice={setPrice} />

                    <div title='Adicionar ao carrinho de compras' className={styles.addCoffeButton}>
                        <ShoppingCart size={22} weight="fill" />
                    </div>
                </div>


            </div>
        </div>
    )
} 