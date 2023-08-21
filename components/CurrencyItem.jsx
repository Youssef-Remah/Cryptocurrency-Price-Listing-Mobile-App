import { Text, View } from "react-native";
import styles from "../styles/MainStyles";

function CurrencyItem(props) {

    const {currency} = props;

    return (

        <View style={styles.currencyItemStyle}>

            <Text style={styles.currencyNameAndPriceStyle}>{currency.name}</Text>

            <Text style={styles.currencySymbolStyle}>{currency.symbol}</Text>

            <Text style={styles.currencyNameAndPriceStyle}>{'$ ' + currency.price_usd}</Text>

        </View>


    );
}

export default CurrencyItem;