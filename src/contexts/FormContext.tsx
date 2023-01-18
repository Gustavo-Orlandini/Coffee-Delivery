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

    setCep: (cep: string) => void,
    setRua: (rua: string) => void,
    setNumero: (numero: string) => void,
    setComplemento: (complemento: string) => void,
    setBairro: (bairro: string) => void,
    setCidade: (cidade: string) => void,
    setUf: (uf: string) => void,

    setPaymentMethod: (method: string) => void,

    resetForm: () => void,


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

    setRua: () => undefined,
    setCep: () => undefined,
    setNumero: () => undefined,
    setComplemento: () => undefined,
    setBairro: () => undefined,
    setCidade: () => undefined,
    setUf: () => undefined,

    setPaymentMethod: () => undefined,

    resetForm: () => undefined,

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

    function resetForm() {
        setRua('')
        setCep('')
        setNumero('')
        setComplemento('')
        setBairro('')
        setCidade('')
        setUf('')
    }

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

            resetForm,
        }}>
            {props.children}
        </FormContext.Provider>
    )
}