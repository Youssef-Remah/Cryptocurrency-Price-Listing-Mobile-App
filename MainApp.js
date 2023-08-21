import { NativeBaseProvider } from "native-base";
import MainScreen from "./components/MainScreen";

function MainApp() {
    return (
        <NativeBaseProvider>

                <MainScreen></MainScreen>


        </NativeBaseProvider>
    );
}

export default MainApp;