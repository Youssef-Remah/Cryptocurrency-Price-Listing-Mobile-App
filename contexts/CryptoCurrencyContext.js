import { createContext } from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import { Text, View } from "react-native";

const apiUrl = "https://api.coinlore.net/api/tickers/";

export const CryptoCurrencyContext = createContext();


const CryptoCurrencyContextProvider = ({children}) => {

    const [currencyData, setCurrencyData] = useState(null);

    const ErrorComponent = () => (
        <View>
            
          <Text>"Oops! Something went wrong. Please try again later."</Text>
          
        </View>
      );

    useEffect(()=>{

        axios.get(apiUrl)

        .then((response)=>setCurrencyData(response.data["data"]))

        .catch(()=> <ErrorComponent/>);

    }, []);

    return(
        
        <CryptoCurrencyContext.Provider value={currencyData}>
            {children}
        </CryptoCurrencyContext.Provider>

    )
    
}

export default CryptoCurrencyContextProvider;