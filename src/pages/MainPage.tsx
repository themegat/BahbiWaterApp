/* eslint-disable prettier/prettier */
import AppHandShaker from '../components/AppHandShaker';
import { StyleSheet } from 'react-native';
import { Divider, Heading, VStack, View } from 'native-base';
import { useState } from 'react';
import AppPrimaryControls from '../components/AppPrimaryControls';
import GlobalStyles from '../services/GlobalStyle';
import AppOutput from '../components/AppOutput';

const MainPage: React.FC<any> = () => {
  const [netState, setNetState] = useState({
    connected: false,
    ipAddress: '',
    log: ''
  });

  const onConnected = (connected: boolean, ipAddress: string, text: string) => {
    setNetState({
      connected,
      ipAddress,
      log: `${netState.log}\n- ${text}`
    });
  }

  const appendLog = (text: string) => {
    setNetState({
      connected: netState.connected,
      ipAddress: netState.ipAddress,
      log: `${netState.log}\n- ${text}`
    });
  }

  return (
    <View style={styles.container}>
      <VStack alignItems="center" space={5}>
        <Heading
          color={GlobalStyles.theme.color}
          size="2xl"
          style={styles.heading}>Bahbi Water</Heading>
      </VStack>
      <AppHandShaker
        callback={onConnected}
        connected={netState.connected}></AppHandShaker>
      <Divider my="5" color={GlobalStyles.theme.color} />
      <AppPrimaryControls
        ipAddress={netState.ipAddress}
        connected={netState.connected}
        logCallback={appendLog}>
      </AppPrimaryControls>
      <Divider my="5" color={GlobalStyles.theme.color} />
      <AppOutput text={netState.log}></AppOutput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  heading: {
    paddingTop: 25,
    paddingBottom: 25
  }
});

export default MainPage;
