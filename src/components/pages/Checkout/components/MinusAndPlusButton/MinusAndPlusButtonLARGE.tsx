import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import styles from './minusAndPlusButtonLARGE.module.css'

interface propsMinusAndPlusButtonLARGE {
    getPrice: (price: number) => void
}

export function MinusAndPlusButtonLARGE({ getPrice }: propsMinusAndPlusButtonLARGE) {
    const [plus, setPlus] = useState<number>(1)
    getPrice(plus)

    function handlePlus() {
        plus >= 10 ? '' : setPlus(plus + 1)

    }

    function handleMimus() {
        plus <= 1 ? '' : setPlus(plus - 1)
    }

    return (
        <div title='Adicione a quantidade desejada' className={styles.quantityContainer}>
            <button onClick={() => handleMimus()}><Minus /></button>
            <input type="number" value={plus} />
            <button onClick={() => handlePlus()}><Plus /></button>
        </div>
    )
}