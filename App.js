import MainApp from './MainApp';

import CryptoCurrencyContextProvider from './contexts/CryptoCurrencyContext';

export default function App() {
  return (

    <CryptoCurrencyContextProvider>
      
      <MainApp>

      </MainApp>

    </CryptoCurrencyContextProvider>
    

  );
}
