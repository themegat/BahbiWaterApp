/* eslint-disable prettier/prettier */
import {Input, Stack, View} from 'native-base';
import AppButton from './AppButton';
import {useState} from 'react';
import GlobalStyles from '../services/GlobalStyle';
import TranslationService from '../services/TranslationService';
import {useDispatch, useSelector} from 'react-redux';
import {onConnected, onDisconnected} from '../services/state/actions/network';
import {onLog} from '../services/state/actions/logger';
import NetworkState from '../models/state/network-state';

const AppHandShaker: React.FC<any> = () => {
  const [ipaddress, setIpAddress] = useState('http://192.168.8');
  const networkState: NetworkState = useSelector((state: any) => state.network);
  const dispatch = useDispatch();

  const connectToServer = async (host: string) => {
    console.log('Fetch test on : ', host);
    if (networkState.connected) {
      dispatch(onLog('Disconnected'));
      dispatch(onDisconnected());
    } else {
      fetch(host, {method: 'GET'})
        .then(response => response.text())
        .then(data => {
          dispatch(onLog(data.toString()));
          dispatch(
            onConnected({
              ipAddress: host,
              connected: true,
            }),
          );
        })
        .catch(ex => {
          console.log('Error: ', ex);
          dispatch(onLog(ex.toString()));
          dispatch(onDisconnected());
        });
    }
  };

  return (
    <View>
      <Stack>
        <Input
          paddingLeft={2}
          style={[GlobalStyles.theme]}
          value={ipaddress}
          onChangeText={newText => setIpAddress(newText)}
          type="text"
          w="100%"
          py="0"
          InputRightElement={
            <AppButton
              rounded="none"
              title={
                networkState.connected
                  ? TranslationService.get('title_disconnect')
                  : TranslationService.get('title_connect')
              }
              color={
                networkState.connected
                  ? GlobalStyles.colordblue.backgroundColor
                  : GlobalStyles.colorlblue.backgroundColor
              }
              onPress={() => connectToServer(ipaddress)}></AppButton>
          }
          placeholder={TranslationService.get('ip_address')}
        />
      </Stack>
    </View>
  );
};

export default AppHandShaker;
