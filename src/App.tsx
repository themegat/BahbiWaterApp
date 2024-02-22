/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NativeBaseProvider} from 'native-base';
import MainPage from './pages/MainPage';
import {configureStore} from '@reduxjs/toolkit';
import allReducers from './services/state/reducers/reducers';
import {Provider} from 'react-redux';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const store = configureStore({reducer: allReducers});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <ImageBackground
            resizeMode="cover"
            style={styles.image}
            source={require('../assets/images/bw_background.png')}>
            <MainPage></MainPage>
          </ImageBackground>
        </ScrollView>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
