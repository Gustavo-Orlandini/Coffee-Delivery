import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import styles from './paymentOptions.module.css'
import { FormContext } from '../../../../../contexts/FormContext'
import { useContext } from 'react';

export function PaymentOptions() {
    const { paymentMethod, setPaymentMethod } = useContext(FormContext);


    console.log(paymentMethod)


    return (
        <div className={styles.paymentOptionsContainer}>
            <div className={styles.paymentInfo}>
                <CurrencyDollar size={22} />
                <div className={styles.paymentInfoTexts}>
                    <span>Pagemento</span>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </div>

            <div className={styles.optionsbuyButtonsContainer}>
                <button onClick={() => setPaymentMethod('credit')} className={styles.typePaymentButton} style={paymentMethod === 'credit' ? {
                    background: "var(--purple-light)",
                    border: "1px solid var(--purple-dark)",
                } : {}} >
                    <CreditCard size={16} />
                    <span>CARTÃO DE CRÉDITO</span>
                </button>
                <button onClick={() => setPaymentMethod('debit')} className={styles.typePaymentButton} style={paymentMethod === 'debit' ? {
                    background: "var(--purple-light)",
                    border: "1px solid var(--purple-dark)",
                } : {}}>
                    <Bank size={16} />
                    <span>CARTÃO DE DÉBITO</span>
                </button>
                <button onClick={() => setPaymentMethod('money')} className={styles.typePaymentButton} style={paymentMethod === 'money' ? {
                    background: "var(--purple-light)",
                    border: "1px solid var(--purple-dark)",
                } : {}}>
                    <Money size={16} />
                    <span>DINHEIRO</span>
                </button>
            </div>
        </div>
    )
}  