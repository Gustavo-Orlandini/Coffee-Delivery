import { createContext, ReactNode, useState } from "react";

interface FormContextProviderProps {
    children?: ReactNode;
}

interface FormContextProps {
    cep: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,

    paymentMethod: string,

    // credCard: string,
    // debitCard: string,
    // money: string,

    setCep: (cep: string) => void,
    setRua: (rua: string) => void,
    setNumero: (numero: string) => void,
    setComplemento: (complemento: string) => void,
    setBairro: (bairro: string) => void,
    setCidade: (cidade: string) => void,
    setUf: (uf: string) => void,

    setPaymentMethod: (method: string) => void,

    // setCredCard: (credCard: string) => void,
    // setDebitCard: (debitCard: string) => void,
    // setMoney: (money: string) => void,
}

export const FormContext = createContext<FormContextProps>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',

    paymentMethod: '',
    // credCard: '',
    // debitCard: '',
    // money: '',

    setCep: () => undefined,
    setRua: () => undefined,
    setNumero: () => undefined,
    setComplemento: () => undefined,
    setBairro: () => undefined,
    setCidade: () => undefined,
    setUf: () => undefined,

    setPaymentMethod: () => undefined,

    // setCredCard: () => undefined,
    // setDebitCard: () => undefined,
    // setMoney: () => undefined,

})

export function FormContextProvider(props: FormContextProviderProps) {
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')

    const [paymentMethod, setPaymentMethod] = useState('')

    return (
        <FormContext.Provider value={{
            cep,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            paymentMethod,


            setCep,
            setRua,
            setNumero,
            setComplemento,
            setBairro,
            setCidade,
            setUf,

            setPaymentMethod,
        }}>
            {props.children}
        </FormContext.Provider>
    )
}