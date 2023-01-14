import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import styles from './paymentOptions.module.css'

export function PaymentOptions() {
    return (
        <div className={styles.paymentOptionsContainer}>
            <div className={styles.paymentInfo}>
                <CurrencyDollar size={22} />
                <div className={styles.paymentInfoTexts}>
                    <span>Pagemtno</span>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </div>

            <div className={styles.optionsbuyButtonsContainer}>
                <button className={styles.typePaymentButton}>
                    <CreditCard size={16} />
                    <span>CARTÃO DE CRÉDITO</span>
                </button>
                <button className={styles.typePaymentButton}>
                    <Bank size={16} />
                    <span>CARTÃO DE DÉBITO</span>
                </button>
                <button className={styles.typePaymentButton}>
                    <Money size={16} />
                    <span>DINHEIRO</span>
                </button>
            </div>
        </div>
    )
}