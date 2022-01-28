import React from 'react';
import Main from './src/Main';
import { Provider } from 'react-redux'
import { Store } from './src/redux/store'
import { ThemeProvider } from './src/utils/ThemeManager';


const App = () => {
  return (
    <ThemeProvider>
      <Provider store={Store}>
        <Main />
      </Provider>
    </ThemeProvider>
    
  );
};


export default App;
