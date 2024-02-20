/* eslint-disable prettier/prettier */
import AppHandShaker from '../components/AppHandShaker';
import {StyleSheet} from 'react-native';
import {Heading, VStack, View, Image} from 'native-base';
import {useState} from 'react';
import AppPrimaryControls from '../components/AppPrimaryControls';
import GlobalStyles from '../services/GlobalStyle';
import AppOutput from '../components/AppOutput';
import AppDivider from '../components/AppDivider';

const MainPage: React.FC<any> = () => {
  const [netState, setNetState] = useState({
    connected: false,
    ipAddress: '',
    log: '',
  });

  const onConnected = (connected: boolean, ipAddress: string, text: string) => {
    setNetState({
      connected,
      ipAddress,
      log: `${netState.log}\n- ${text}`,
    });
  };

  const appendLog = (text: string) => {
    setNetState({
      connected: netState.connected,
      ipAddress: netState.ipAddress,
      log: `${netState.log}\n- ${text}`,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/icon.png')}></Image>
      <VStack alignItems="center" space={1}>
        <Heading
          color={GlobalStyles.theme.color}
          size="2xl"
          style={styles.heading}>
          Bahbi Water
        </Heading>
      </VStack>
      <AppDivider title="Connect" width="77%"></AppDivider>
      <AppHandShaker
        callback={onConnected}
        connected={netState.connected}></AppHandShaker>
      <AppDivider title="Controls" width="77%"></AppDivider>
      <AppPrimaryControls
        ipAddress={netState.ipAddress}
        connected={netState.connected}
        logCallback={appendLog}></AppPrimaryControls>
      <AppDivider title="Output" width="82%"></AppDivider>
      <AppOutput text={netState.log}></AppOutput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  heading: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  logo: {
    width: '40%',
    height: '20%',
    objectFit: 'fill',
    alignSelf: 'center',
    borderRadius: 100,
  },
});

export default MainPage;
