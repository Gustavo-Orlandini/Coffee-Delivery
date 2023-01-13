import styles from './selectedCoffees.module.css'

import Latte from '../../../assets/cups/expresso-tradicional.svg'
import ExpressoTradicional from '../../../../../assets/cups/expresso-tradicional.svg'
import { Minus, Plus, Trash } from 'phosphor-react'

export function SelectedCoffee() {
    return (
        <>
            <div className={styles.checkoutContainer}>

                <div className={styles.chosenCoffeeContainer}>
                    <img src={ExpressoTradicional} alt="" />

                    <div>
                        <p>Expresso Tradicional</p>

                        <div className={styles.itemActions}>


                            <div title='Adicione a quantidade desejada' className={styles.quantityContainer}>
                                <button><Minus size={14} /></button>
                                <input type="number" value="1" />
                                <button><Plus size={14} /></button>
                            </div>

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
                    }}>R$ 9,90</span>


                </div>

            </div>
            <hr style={{ marginBottom: '2rem' }} />
        </>
    )
}