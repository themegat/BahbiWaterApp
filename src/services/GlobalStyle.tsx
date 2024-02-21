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
  colordblue: {
    backgroundColor: '#236295',
    color: '#236295',
  },
  colorlblue: {
    backgroundColor: '#0da8d9',
    color: '#0da8d9',
  },
  colorred: {
    backgroundColor: '#d62f11',
    color: '#d62f11',
  },
  colorgreen: {
    backgroundColor: '#0dbf16',
    color: '#0dbf16',
  },
  coloryellow: {
    backgroundColor: '#ffd48f',
    color: '#ffd48f',
  },
});

export default GlobalStyles;
