/* eslint-disable prettier/prettier */
import {Appearance, StyleSheet} from 'react-native';

const isDark = Appearance.getColorScheme() === 'dark' ? true : false;

const GlobalStyles = StyleSheet.create({
  theme: {
    color: isDark ? 'white' : '#696969',
    fontWeight: 'bold',
    fontSize: 14,
  },
  border: {
    borderColor: isDark ? '#e0e0e0' : '#757373',
    borderWidth: 2,
    borderRadius: 5,
  },
  colorblue: {
    backgroundColor: '#2266f0',
    color: '#2266f0',
  },
  colorred: {
    backgroundColor: '#d62f11',
    color: '#d62f11',
  },
  colorgreen: {
    backgroundColor: '#0dbf16',
    color: '#0dbf16',
  },
});

export default GlobalStyles;
