import { createContext, ReactNode, useState } from 'react'

export interface CoffeeItem {
    id: string;
    coffeeTitle: string;
    quantity: number;
    price: number;
    coffeeImg: string;
}


interface CoffeeContextProps {
    coffeeList: CoffeeItem[];
    addCoffee: (param: CoffeeItem) => void;
    updateCoffeeQuantity: (id: string, newQuantity: number) => void,
    removeCoffee: (id: string) => void,
    resetCoffeList: () => void,
}

export const CoffeeContext = createContext<CoffeeContextProps>({
    coffeeList: [],
    addCoffee: () => undefined,
    updateCoffeeQuantity: () => undefined,
    removeCoffee: () => undefined,
    resetCoffeList: () => undefined,
});

interface CoffeeContextProviderProps {
    children?: ReactNode;
}

export function CoffeeContextProvider(props: CoffeeContextProviderProps) {
    const [coffeeList, setCoffeeList] = useState<CoffeeItem[]>([]);
    console.log(coffeeList)

    function updateCoffeeQuantity(id: string, newQuantity: number) {
        const newCoffeeList = coffeeList.map((coffee) => {
            if (id === coffee.id) {
                return { ...coffee, quantity: newQuantity }
            }
            return coffee
        });
        setCoffeeList(newCoffeeList)

    }

    function removeCoffee(id: string) {
        const coffeeToDelete = coffeeList.filter((coffee) => {
            return coffee.id != id
        });
        setCoffeeList(coffeeToDelete)
    }

    function resetCoffeList() {
        setCoffeeList([])
    }

    return (
        <CoffeeContext.Provider value={{
            coffeeList,
            addCoffee: (param: CoffeeItem) => setCoffeeList([...coffeeList, param]),
            updateCoffeeQuantity: updateCoffeeQuantity,
            removeCoffee: removeCoffee,
            resetCoffeList: resetCoffeList,

        }}>
            {props.children}
        </CoffeeContext.Provider>
    );
}