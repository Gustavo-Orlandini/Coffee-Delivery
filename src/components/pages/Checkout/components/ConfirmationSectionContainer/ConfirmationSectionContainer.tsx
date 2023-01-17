import { NavLink } from 'react-router-dom'
import styles from './confirmationSectionContainer.module.css'
import { CoffeeContext, CoffeeItem } from '../../../../../contexts/CoffeeContext';
import { useContext } from 'react';
import { formatPrice, formatPriceCurrencyNULL } from '../../../../../utils/FormatPrice'


export function ConfirmationSectionContainer() {
    const { coffeeList } = useContext(CoffeeContext)
    const deliveryFee = 3.5
    const sumCoffees = coffeeList.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price
    }, 0)
    const sumTotal = sumCoffees + deliveryFee


    return (
        <>
            <div className={styles.buyResult}>
                <p>Total de itens</p>
                <span>{formatPrice(sumCoffees)}</span>

            </div>

            <div className={styles.buyResult}>
                <p>Entrega</p>
                <span>R$ {formatPriceCurrencyNULL(deliveryFee)}</span>

            </div>

            <div className={styles.buyResult}>
                <h5>Total</h5>
                <h4>{formatPrice(sumTotal)}</h4>
            </div>
            <NavLink to='/success' title='Success'>

                <div className={styles.confirmButton}>
                    <button>CONFIRMAR PEDIDO</button>

                </div>
            </NavLink>
        </>
    )
}