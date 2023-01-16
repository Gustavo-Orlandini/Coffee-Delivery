import { useContext, createContext, ReactNode, useState } from 'react'

interface CoffeeItem {
    id: string;
    coffeeTitle: string;
    quantity: number;
    price: number;
    coffeeImg: string;
}


interface CoffeeContextProps {
    coffeeList: CoffeeItem[];
    addCoffee: (param: CoffeeItem) => void;
}

export const CoffeeContext = createContext<CoffeeContextProps>({
    coffeeList: [],
    addCoffee: () => undefined,
});

interface CoffeeContextProviderProps {
    children?: ReactNode;
}

export function CoffeeContextProvider(props: CoffeeContextProviderProps) {
    const [coffeeList, setCoffeeList] = useState<CoffeeItem[]>([]);
    return (
        <CoffeeContext.Provider value={{
            coffeeList,
            addCoffee: (param: CoffeeItem) => setCoffeeList([...coffeeList, param]),
        }}>
            {props.children}
        </CoffeeContext.Provider>
    );
}