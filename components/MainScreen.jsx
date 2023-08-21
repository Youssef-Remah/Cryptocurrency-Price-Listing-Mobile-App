import { Box } from "native-base";
import { Text, FlatList } from "react-native";
import MainTitle from "../components/MainTitle";
import styles from "../styles/MainStyles";
import {CryptoCurrencyContext} from "../contexts/CryptoCurrencyContext";
import { useContext } from "react";
import CurrencyItem from "../components/CurrencyItem";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';


function MainScreen() {

    const currencyData = useContext(CryptoCurrencyContext);

    const renderCurrency = ({item}) => {

        return(
            
            <CurrencyItem currency = {item}></CurrencyItem>
        );

    };


    return (
        <>
            <Box paddingTop='1/6' justifyContent='center' flexDirection='row'>

                <MainTitle></MainTitle>

                <FontAwesomeIcon icon={faCoins} size={25} color="lightslategrey"/>

                

            </Box>

            <Box margin="6" flexDirection="row" justifyContent="space-between">

                <Text style={styles.listTitleStyle}>Name</Text>

                <Text style={styles.listTitleStyle}>Symbol</Text>

                <Text style={styles.listTitleStyle}>Price (US$)</Text>

            </Box>

            <Box>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={currencyData}
                    renderItem={renderCurrency}
                />

            </Box>
        </>
    );
}

export default MainScreen;