import styles from './selectedCoffees.module.css'
import { Trash } from 'phosphor-react'
import { MinusAndPlussButtonSMALL } from '../MinusAndPlusButton/MinusAndPlusButtonSMALL'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../../contexts/CoffeeContext'


interface SelectedCoffee {
    id: string,
    coffeeImg: string,
    coffeeTitle: string,
    price: number | string,
    quantity: number,

}

export function SelectedCoffee(props: SelectedCoffee) {
    const { updateCoffeeQuantity, removeCoffee } = useContext(CoffeeContext)

    function onPlusOrMinusClick(value: number) {
        updateCoffeeQuantity(props.id, value)

    }


    return (
        <>
            <div className={styles.checkoutContainer}>

                <div className={styles.chosenCoffeeContainer}>
                    <img src={props.coffeeImg} alt="" />

                    <div>
                        <p>{props.coffeeTitle}</p>

                        <div className={styles.itemActions}>

                            <MinusAndPlussButtonSMALL onMinusClick={onPlusOrMinusClick} onPlusClick={onPlusOrMinusClick} minQuantity={1} maxQuantity={10} initialValue={props.quantity} />

                            <button onClick={() => removeCoffee(props.id)} className={styles.removeButton}>
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