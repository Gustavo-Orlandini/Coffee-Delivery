import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import styles from './minusAndPlusButtonLARGE.module.css'

interface minusAndPlusButtonLARGEProps {
    getPrice: (price: number) => void,
    initialValue: number,
    maxQuantity: number,
    minQuantity: number,
}

export function MinusAndPlusButtonLARGE({ getPrice, initialValue, maxQuantity, minQuantity }: minusAndPlusButtonLARGEProps) {
    const [value, setValue] = useState<number>(initialValue)
    getPrice(value)

    function handlePlus() {
        value >= maxQuantity ? '' : setValue(value + 1)

    }

    function handleMimus() {
        value <= minQuantity ? '' : setValue(value - 1)
    }

    return (
        <div title='Adicione a quantidade desejada' className={styles.quantityContainer}>
            <button onClick={() => handleMimus()}><Minus /></button>
            <input type="number" value={value} />
            <button onClick={() => handlePlus()}><Plus /></button>
        </div>
    )
}