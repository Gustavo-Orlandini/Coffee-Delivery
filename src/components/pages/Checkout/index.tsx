import { MapPinLine } from 'phosphor-react'
import { ConfirmationSectionContainer } from './components/ConfirmationSectionContainer/ConfirmationSectionContainer'
import { SelectedCoffee } from './components/SelectedCoffees/SelectedCoffees'
import { PaymentOptions } from './components/paymentOptions/PaymentOptions'
import { CoffeeContext } from '../../../contexts/CoffeeContext'
import { useContext } from 'react'
import { formatPrice } from '../../../utils/FormatPrice'
import styles from './checkout.module.css'




export function Checkout() {
  const { coffeeList } = useContext(CoffeeContext);

  return (

    <div className={styles.allContainers}>

      <div className={styles.leftContainer}>
        <h3>Complete seu pedido</h3>

        <div className={styles.userDataContainer}>

          <div className={styles.addressinfo}>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>


          <form className={styles.datasFromUser}>
            <input style={{ width: "12.5rem" }}
              placeholder='CEP'
              type="number" />
            <input placeholder='Rua' type="text" />

            <div className={styles.datasFromUser2}>
              <input style={{ width: "12.5rem" }} placeholder='Número' type="number" />

              <div className={styles.secondPlaceholderDetail} data-required='Opcional'>
                <input id='demoTextBox' style={{ width: "21.75rem" }} placeholder='Complemento' type="text" />
              </div>

            </div>

            <div className={styles.datasFromUser3}>
              <input style={{ width: "12.5rem" }} placeholder='Bairro' type="number" />
              <input style={{ width: "17.25rem" }} placeholder='Cidade' type="text" />
              <input style={{ width: "3.75rem" }} placeholder='UF' type="text" />
            </div>
          </form>
        </div>
        <PaymentOptions />



      </div>
      <div className={styles.rightContainer}>
        <h3>Cafés selecionados</h3>

        <div className={styles.coffeeSelectedContainer}>
          {coffeeList.map(i => {

            return (
              <SelectedCoffee key={i.id} id={i.id} quantity={i.quantity} coffeeImg={i.coffeeImg} coffeeTitle={i.coffeeTitle} price={formatPrice(i.price * i.quantity)} />

            )
          })}


          <ConfirmationSectionContainer />
        </div>
      </div>
    </div>

  )
}