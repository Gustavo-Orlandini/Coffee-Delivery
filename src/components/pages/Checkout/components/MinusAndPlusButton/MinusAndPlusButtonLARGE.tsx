import { Minus, Plus } from 'phosphor-react'
import styles from './minusAndPlusButtonLARGE.module.css'

export function MinusAndPlusButtonLARGE() {
    return (
        <div title='Adicione a quantidade desejada' className={styles.quantityContainer}>
            <button><Minus /></button>
            <input type="number" value="1" />
            <button><Plus /></button>
        </div>
    )
}