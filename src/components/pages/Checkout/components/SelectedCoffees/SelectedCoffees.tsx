import styles from './selectedCoffees.module.css'
import { Minus, Plus, Trash } from 'phosphor-react'
import { MinusAndPlusButtonLARGE } from '../MinusAndPlusButton/MinusAndPlusButtonLARGE'
import { MinusAndPlussButtonSMALL } from '../MinusAndPlusButton/MinusAndPlusButtonSMALL'


interface SelectedCoffee {
    coffeeImg: string,
    coffeeTitle: string,
    price: number | string,
}

export function SelectedCoffee(props: SelectedCoffee) {
    return (
        <>
            <div className={styles.checkoutContainer}>

                <div className={styles.chosenCoffeeContainer}>
                    <img src={props.coffeeImg} alt="" />

                    <div>
                        <p>{props.coffeeTitle}</p>

                        <div className={styles.itemActions}>

                            <MinusAndPlussButtonSMALL />

                            <button className={styles.removeButton}>
                                <Trash size={16} />
                                <span>REMOVER</span>
                            </button>
                        </div>
                    </div>

                    <span style={{
                        fontWeight: 700,
                        marginLeft: 'auto',
                        alignSelf: 'baseline'
                    }}>{props.price}</span>


                </div>

            </div>
            <hr style={{ marginBottom: '2rem' }} />
        </>
    )
}