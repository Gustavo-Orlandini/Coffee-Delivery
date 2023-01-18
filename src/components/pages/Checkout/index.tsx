import { MapPinLine } from 'phosphor-react'
import { ConfirmationSectionContainer } from './components/ConfirmationSectionContainer/ConfirmationSectionContainer'
import { SelectedCoffee } from './components/SelectedCoffees/SelectedCoffees'
import { PaymentOptions } from './components/paymentOptions/PaymentOptions'
import { CoffeeContext } from '../../../contexts/CoffeeContext'
import React, { useContext } from 'react'
import { formatPrice } from '../../../utils/FormatPrice'
import styles from './checkout.module.css'
import { FormContext } from '../../../contexts/FormContext'




export function Checkout() {
  const { coffeeList } = useContext(CoffeeContext);
  const { cep, rua, numero, complemento, bairro, cidade, uf, setCep,
    setRua,
    setNumero,
    setComplemento,
    setBairro,
    setCidade,
    setUf } = useContext(FormContext);



  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setCep(cep)
    setRua(rua)
    setNumero(numero)
    setComplemento(complemento)
    setBairro(bairro)
    setCidade(cidade)
    setUf(uf)
  }

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


          <form onSubmit={handleSubmit} className={styles.datasFromUser}>
            <input
              value={cep}
              id=''
              onChange={(e) => setCep(e.target.value)}
              style={{ width: "12.5rem" }}
              placeholder='CEP'
              type="number" />
            <input
              value={rua}
              id=''
              onChange={(e) => setRua(e.target.value)}
              placeholder='Rua'
              type="text" />

            <div className={styles.datasFromUser2}>
              <input
                value={numero}
                id=''
                onChange={(e) => setNumero(e.target.value)}
                style={{ width: "12.5rem" }}
                placeholder='Número'
                type="number" />

              <div className={styles.secondPlaceholderDetail} data-required='Opcional'>
                <input
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                  id='demoTextBox' style={{ width: "21.75rem" }}
                  placeholder='Complemento'
                  type="text" />
              </div>

            </div>

            <div className={styles.datasFromUser3}>
              <input
                value={bairro}
                id=''
                onChange={(e) => setBairro(e.target.value)}
                style={{ width: "12.5rem" }}
                placeholder='Bairro'
                type="number" />
              <input
                value={cidade}
                id=''
                onChange={(e) => setCidade(e.target.value)}
                style={{ width: "17.25rem" }}
                placeholder='Cidade'
                type="text" />
              <input
                value={uf}
                id=''
                onChange={(e) => setUf(e.target.value)}
                style={{ width: "3.75rem" }}
                placeholder='UF'
                type="text" />
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