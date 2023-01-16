import { Minus, Plus } from 'phosphor-react'
import styles from './minusAndPlusButtonSMALL.module.css'

export function MinusAndPlussButtonSMALL() {
    return (
        <div title='Adicione a quantidade desejada' className={styles.quantityContainer}>
            <button><Minus size={14} /></button>
            <input type="number" value="1" />
            <button><Plus size={14} /></button>
        </div>
    )
}