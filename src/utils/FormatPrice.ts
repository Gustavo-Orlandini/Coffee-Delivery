export function formatPrice(price: number) {
    return new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(price)


}

export function formatPriceCurrencyNULL(price: number) {
    return new Intl.NumberFormat('pt-BR',
        { minimumFractionDigits: 2 }).format(price)

}