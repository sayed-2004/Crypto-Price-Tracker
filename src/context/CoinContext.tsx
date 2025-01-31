import { useEffect, useState, createContext, ReactNode } from "react";

interface Currency {
    name: string;
    symbol: string;
}

interface Coin {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    image: string;
}

interface CoinContextType {
    allCoin: Coin[];
    currency: Currency;
    setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

export const CoinContext = createContext<CoinContextType | null>(null); // Correctly define the context

const CoinContextProvider = ({ children }: { children: ReactNode }) => {
    const [allCoin, setAllCoin] = useState<Coin[]>([]);
    const [currency, setCurrency] = useState<Currency>({
        name: "usd",
        symbol: "$"
    });

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-cK6V29uoA4tZ4JGupMebvyDt' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    return (
        <CoinContext.Provider value={{ allCoin, currency, setCurrency }}>
            {children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
