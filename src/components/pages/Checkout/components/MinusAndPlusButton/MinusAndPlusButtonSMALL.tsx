import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import styles from './minusAndPlusButtonSMALL.module.css'

export function MinusAndPlussButtonSMALL() {
    const [plus, setPlus] = useState<number>(1)

    function handlePlus() {
        plus >= 10 ? '' : setPlus(plus + 1)
    }

    function handleMinus() {
        plus <= 1 ? '' : setPlus(plus - 1)
    }


    return (
        <div title='Adicione a quantidade desejada' className={styles.quantityContainer}>
            <button onClick={() => handleMinus()} ><Minus size={14} /></button>
            <input type="number" value={plus} />
            <button onClick={() => handlePlus()} ><Plus size={14} /></button>
        </div>
    )
}