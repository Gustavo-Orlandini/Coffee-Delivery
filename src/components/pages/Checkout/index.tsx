import { MapPinLine, Minus, Plus, Trash } from 'phosphor-react'
import { ConfirmationSectionContainer } from '../Home/components/ConfirmationSectionContainer/ConfirmationSectionContainer'
import { SelectedCoffee } from '../Home/components/SelectedCoffees/SelectedCoffees'
import styles from './checkout.module.css'



export function Checkout() {

  return (
    <div className={styles.checkoutContainer}>
      <div>
        <h3>Complete seu pedido</h3>

        <div className={styles.userDataContainer}>

          <div className={styles.addressinfo}>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>


          <div className={styles.datasFromUser}>
            <input style={{ width: "12.5rem" }} placeholder='CEP' type="number" />
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
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <h3>Cafés selecionados</h3>

        <div className={styles.coffeeSelectedContainer}>
          <SelectedCoffee />
          <SelectedCoffee />

          <ConfirmationSectionContainer />
        </div>
      </div>

    </div>
  )
}