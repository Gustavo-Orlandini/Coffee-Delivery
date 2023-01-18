import { NavLink } from 'react-router-dom'
import styles from './confirmationSectionContainer.module.css'
import { CoffeeContext } from '../../../../../contexts/CoffeeContext';
import { FormContext } from '../../../../../contexts/FormContext'
import { useContext } from 'react';
import { formatPrice, formatPriceCurrencyNULL } from '../../../../../utils/FormatPrice'
import { toast } from 'react-toastify';


export function ConfirmationSectionContainer() {
    const { coffeeList, resetCoffeList } = useContext(CoffeeContext)
    const { rua, bairro, numero, cidade, uf, paymentMethod, resetForm } = useContext(FormContext)
    const emptyCamps = rua.length === 0 || bairro.length === 0 || numero.length === 0 || cidade.length === 0 || uf.length === 0 || paymentMethod.length === 0
    const deliveryFee = 3.5
    const sumCoffees = coffeeList.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price
    }, 0)
    const sumTotal = sumCoffees + deliveryFee

    // const teste = () => {
    //     resetCoffeList()
    //     resetForm()
    // }

    console.log(emptyCamps)

    return (
        <>
            <div className={styles.buyResult}>
                <p>Total de itens</p>
                <span>{formatPrice(sumCoffees)}</span>

            </div>

            <div className={styles.buyResult}>
                <p>Entrega</p>
                <span>R$ {formatPriceCurrencyNULL(deliveryFee)}</span>

            </div>

            <div className={styles.buyResult}>
                <h5>Total</h5>
                <h4>{formatPrice(sumTotal)}</h4>
            </div>
            <NavLink onClick={() => {
                if (emptyCamps) {
                    toast.error('Preencha os campos obrigatórios para continuar!', {

                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",

                    })
                }
            }}
                to={emptyCamps ? '' : '/success'}>


                <div className={styles.confirmButton}>
                    {
                        emptyCamps ?
                            <button>CONFIRMAR PEDIDO</button>
                            :
                            <button onClick={resetCoffeList}>CONFIRMAR PEDIDO</button>

                    }
                </div>
            </NavLink>
        </>
    )
}