import { NavLink } from 'react-router-dom'
import styles from './confirmationSectionContainer.module.css'

export function ConfirmationSectionContainer() {
    return (
        <>
            <div className={styles.buyResult}>
                <p>Total de itens</p>
                <span>R$ 29,70</span>

            </div>

            <div className={styles.buyResult}>
                <p>Entrega</p>
                <span>R$ 3,50</span>

            </div>

            <div className={styles.buyResult}>
                <h5>Total</h5>
                <h4>R$ 33,20</h4>

            </div>
            <NavLink to='/success' title='Success'>

                <div className={styles.confirmButton}>
                    <button>CONFIRMAR PEDIDO</button>

                </div>
            </NavLink>
        </>
    )
}