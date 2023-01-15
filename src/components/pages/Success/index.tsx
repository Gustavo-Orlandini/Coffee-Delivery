import styles from './success.module.css'
import illustrationPicture from '../../../assets/illustration.svg'

export function Success() {
    return (
        <>
            <header className={styles.header}>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </header>

            <div className={styles.successContainer}>

                <div className={styles.resumePay}>
                    <h1>asdasfdasdasd</h1>
                    <h1>asdasfdasdasd</h1>
                    <h1>asdasfdasdasd</h1>

                </div>

                <div className={styles.illustrationPicture}>
                    <img src={illustrationPicture} alt="" />
                </div>

            </div>
        </>

    )
}