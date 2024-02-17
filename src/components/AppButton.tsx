/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Button} from 'native-base';
import React from 'react';

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
  color = 'blue',
  rounded = 'md',
}) => {
  return (
    <Button onPress={onPress} size={size} colorScheme={color} rounded={rounded}>
      {title}
    </Button>
  );
};

export default AppButton;
