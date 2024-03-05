import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './app/store/Store';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import ThemeLight from './app/themes/ThemeLight';
import { ThemeDark } from './app/themes/ThemeDark';
import { useColorScheme } from 'react-native';

const App = () => {
  const scheme = useColorScheme();
  const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: ThemeLight });
  const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: ThemeDark });
  const appTheme = scheme === 'dark' ? DarkTheme : LightTheme
  return (
    <Provider store={store} >
      <PaperProvider>
        <AppNavigator appTheme={appTheme}/>
      </PaperProvider>
    </Provider>
  );
};

export default App;
