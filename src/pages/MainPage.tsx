/* eslint-disable prettier/prettier */
import AppHandShaker from '../components/AppHandShaker';
import {StyleSheet} from 'react-native';
import {Heading, VStack, View} from 'native-base';
import {useState} from 'react';
import AppPrimaryControls from '../components/AppPrimaryControls';
import GlobalStyles from '../services/GlobalStyle';
import AppOutput from '../components/AppOutput';
import AppDivider from '../components/AppDivider';
import TranslationService from '../services/TranslationService';

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
      <VStack alignItems="center" space={1}>
        <Heading
          color={GlobalStyles.theme.color}
          size="2xl"
          style={styles.heading}>
          {TranslationService.get('app_title')}
        </Heading>
      </VStack>
      <AppDivider
        title={TranslationService.get('title_connect')}
        width="77%"></AppDivider>
      <AppHandShaker
        callback={onConnected}
        connected={netState.connected}></AppHandShaker>
      <AppDivider
        title={TranslationService.get('title_controls')}
        width="77%"></AppDivider>
      <AppPrimaryControls
        ipAddress={netState.ipAddress}
        connected={netState.connected}
        logCallback={appendLog}></AppPrimaryControls>
      <AppDivider
        title={TranslationService.get('title_output')}
        width="82%"></AppDivider>
      <AppOutput text={netState.log}></AppOutput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  heading: {
    paddingTop: 5,
    paddingBottom: 20,
  },
});

export default MainPage;
