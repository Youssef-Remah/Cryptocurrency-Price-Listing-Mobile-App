import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    listTitleStyle:{

        color: 'dimgray',

        fontSize: 15,

        fontWeight: 'bold'

    },

    currencyItemStyle:{

        margin:10,

        padding:20,

        borderWidth:1,

        borderColor:'darkgray',

        borderRadius: 10,

        flexDirection:'row',

        justifyContent:'space-between'
    },

    currencyNameAndPriceStyle:{
        
        fontWeight:'bold',

        fontSize: 18,
        
    },

    currencySymbolStyle:{

        fontSize:16
    }

});

export default styles;