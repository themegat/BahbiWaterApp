import { Appearance, StyleSheet } from "react-native";

const isDark = Appearance.getColorScheme() === 'dark' ? true : false;

const GlobalStyles = StyleSheet.create({
    theme: {
        color: isDark ? 'white' : 'black',
    },
});

export default GlobalStyles;