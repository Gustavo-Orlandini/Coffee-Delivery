import styles from './success.module.css'
import illustrationPicture from '../../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { ResumePayComponent } from './component/finalFeature'
import { useContext } from 'react'
import { FormContext } from '../../../contexts/FormContext'

export function Success() {
    const { rua, bairro, complemento, numero, cidade, uf, paymentMethod } = useContext(FormContext)

    function changeWordsOfPaymentMethod() {
        if (paymentMethod === 'credit') {
            return 'Cartão de Crédito'
        } else if (paymentMethod === 'debit') {
            return 'Cartão de Débito'
        } return 'Dinheiro'
    }

    return (
        <>
            <header className={styles.header}>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </header>

            <div className={styles.successContainer}>

                <div className={styles.resumePay}>
                    <ResumePayComponent
                        icon={<MapPin size={16} />}
                        colorPin='var(--purple)'
                        p1='Entrega em '
                        p2={`${bairro} - ${complemento} - ${cidade} ${uf}`}
                        span1={`${rua}, ${numero}`}
                    />

                    <ResumePayComponent
                        icon={<Timer size={16} />}
                        colorPin='var(--yellow)'
                        p1='Previsão de entrega'
                        span2='20 min - 30 min'
                    />

                    <ResumePayComponent
                        icon={<CurrencyDollar size={16} />}
                        colorPin='var(--yellow-dark)'
                        p1='Pagamento na entrega'
                        span2={changeWordsOfPaymentMethod()}
                    />


                </div>

                <div className={styles.illustrationPicture}>
                    <img src={illustrationPicture} alt="" />
                </div>

            </div>
        </>

    )
}