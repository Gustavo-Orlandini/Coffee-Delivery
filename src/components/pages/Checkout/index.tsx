import { MapPinLine, Minus, Plus, Trash } from 'phosphor-react'
import styles from './checkout.module.css'
import ExpressoTradicional from '../../../assets/cups/expresso-tradicional.svg'
import Latte from '../../../assets/cups/expresso-tradicional.svg'

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
              <input style={{ width: "21.75rem" }} placeholder='Complemento' type="text" />
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

          <div className={styles.chosenCoffeeContainer}>
            <img src={ExpressoTradicional} alt="" />

            <div>
              <p>Expresso Tradicional</p>

              <div className={styles.itemActions}>


                <div title='Adicione a quantidade desejada' className={styles.quantityContainer}>
                  <button><Minus size={14} /></button>
                  <input type="number" value="1" />
                  <button><Plus size={14} /></button>
                </div>

                <button className={styles.removeButton}>
                  <Trash size={16} />
                  <span>REMOVER</span>
                </button>
              </div>
            </div>

            <span style={{
              fontWeight: 700,
              marginLeft: 'auto',
              alignSelf: 'baseline'
            }}>R$ 9,90</span>


          </div>

          <hr style={{ marginBottom: '2rem' }} />

          <div className={styles.chosenCoffeeContainer}>
            <img src={ExpressoTradicional} alt="" />

            <div>
              <p>Expresso Tradicional</p>

              <div className={styles.itemActions}>


                <div title='Adicione a quantidade desejada' className={styles.quantityContainer}>
                  <button><Minus size={14} /></button>
                  <input type="number" value="1" />
                  <button><Plus size={14} /></button>
                </div>

                <button className={styles.removeButton}>
                  <Trash size={16} />
                  <span>REMOVER</span>
                </button>
              </div>
            </div>

            <span style={{
              fontWeight: 700,
              marginLeft: 'auto',
              alignSelf: 'baseline'
            }}>R$ 9,90</span>


          </div>

          <hr style={{ marginBottom: '2rem' }} />

        </div>
      </div>

    </div>
  )
}