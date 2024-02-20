/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Button} from 'native-base';
import React from 'react';
import GlobalStyles from '../services/GlobalStyle';

interface Props {
  title: string;
  onPress?: any;
  size?: string;
  color?: string;
  rounded?: string;
}

const AppButton: React.FC<Props> = ({
  title,
  onPress,
  size = 'md',
  color = GlobalStyles.colorblue.backgroundColor,
  rounded = 'md',
}) => {
  return (
    <Button 
    fontWeight={GlobalStyles.theme.fontWeight}
    fontSize={GlobalStyles.theme.fontSize}
    onPress={onPress} 
    size={size} 
    bg={color} 
    rounded={rounded}>
      {title}
    </Button>
  );
};

export default AppButton;
