import { useEffect, useState, createContext, ReactNode } from "react";


interface Currency {
    name: string;
    symbol: string;
}

export interface Coin {
    name: string;
    symbol: string;
    market_cap_rank: number;
    image: string;
    current_price: string;
    price_change_percentage_24h: number;
    market_cap: number;

}

interface CoinContextType {
    allCoin: Coin[];
    currency: Currency;
    setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

export const CoinContext = createContext<CoinContextType | null>(null); // Correctly define the context

interface CoinContextProviderProps {
    children: ReactNode; // Define children as ReactNode
}


const CoinContextProvider: React.FC<CoinContextProviderProps> = ({ children }) => {
    const [allCoin, setAllCoin] = useState<Coin[]>([]);
    const [currency, setCurrency] = useState<Currency>({
        name: "usd",
        symbol: "$",
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

        fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10', options)
            .then(res => res.json())
            .then(res => console.log(res))
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
