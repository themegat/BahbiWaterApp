/* eslint-disable prettier/prettier */
import AppHandShaker from '../components/AppHandShaker';
import { StyleSheet } from 'react-native';
import { Heading, VStack, View } from 'native-base';
import { useState } from 'react';
import AppPrimaryControls from '../components/AppPrimaryControls';

interface NetState {
  connetcted: boolean;
  ipAddress: string;
}

const MainPage: React.FC<any> = () => {
  const [netState, setNetState] = useState({
    connected: false,
    ipAddress: ''
  });
  const onConnected = (connected: boolean, ipAddress: string) => {
    setNetState({
      connected,
      ipAddress
    });
  }

  return (
    <View style={styles.container}>
      <VStack alignItems="center" space={5}>
        <Heading size="2xl">Bahbi Water</Heading>
      </VStack>
      <AppHandShaker callback={onConnected}></AppHandShaker>
      <AppPrimaryControls
        ipAddress={netState.ipAddress}
        connected={netState.connected}>
      </AppPrimaryControls>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MainPage;
