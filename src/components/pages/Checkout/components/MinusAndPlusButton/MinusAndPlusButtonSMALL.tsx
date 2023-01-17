import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import styles from './minusAndPlusButtonSMALL.module.css'

interface MinusAndPlussButtonSMALLProps {
    initialValue: number,
    maxQuantity: number,
    minQuantity: number,
    onPlusClick?: (value: number) => void,
    onMinusClick?: (value: number) => void,

}

export function MinusAndPlussButtonSMALL(props: MinusAndPlussButtonSMALLProps) {
    const [value, setValue] = useState<number>(props.initialValue)

    function handlePlus() {
        value >= props.maxQuantity ? '' : setValue(value + 1)
        if (props.onPlusClick) {
            props.onPlusClick(value + 1)
        }
    }

    function handleMinus() {
        value <= props.minQuantity ? '' : setValue(value - 1)
        if (props.onMinusClick) {
            props.onMinusClick(value - 1)
        }
    }


    return (
        <div title='Adicione a quantidade desejada' className={styles.quantityContainer}>
            <button onClick={() => handleMinus()} ><Minus size={14} /></button>
            <input type="number" value={value} />
            <button onClick={() => handlePlus()} ><Plus size={14} /></button>
        </div>
    )
}