import styles from './success.module.css'
import illustrationPicture from '../../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
    return (
        <>
            <header className={styles.header}>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </header>

            <div className={styles.successContainer}>

                <div className={styles.resumePay}>
                    <div className={styles.envolt}>
                        <div
                            style={{
                                color: 'var(--white)',
                                width: '2rem',
                                height: '2rem',
                                background: `var(--purple)`,
                                borderRadius: '999px',
                                padding: '8px',
                            }}>
                            <MapPin size={16} />
                        </div>
                        <div>
                            <p style={{ fontSize: '1rem' }}>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
                            <p>Farrapos - Porto Alegre, RS</p>

                        </div>
                    </div>

                    <div className={styles.envolt}>
                        <div
                            style={{
                                color: 'var(--white)',
                                width: '2rem',
                                height: '2rem',
                                background: `var(--yellow)`,
                                borderRadius: '999px',
                                padding: '8px',
                            }}>
                            <Timer size={16} />
                        </div>
                        <div>
                            <p style={{ fontSize: '1rem' }}>Previsão de entrega</p>
                            <span>20 min - 30 min</span>

                        </div>
                    </div>

                    <div className={styles.envolt}>
                        <div
                            style={{
                                color: 'var(--white)',
                                width: '2rem',
                                height: '2rem',
                                background: `var(--yellow-dark)`,
                                borderRadius: '999px',
                                padding: '8px',
                            }}>
                            <CurrencyDollar size={16} />
                        </div>
                        <div>
                            <p style={{ fontSize: '1rem' }}>Pagamento na entrega</p>
                            <span>Cartão de crédito</span>

                        </div>
                    </div>

                </div>

                <div className={styles.illustrationPicture}>
                    <img src={illustrationPicture} alt="" />
                </div>

            </div>
        </>

    )
}