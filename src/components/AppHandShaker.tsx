/* eslint-disable prettier/prettier */
import {Input, Stack, View} from 'native-base';
import AppButton from './AppButton';
import {useState} from 'react';
import GlobalStyles from '../services/GlobalStyle';
import TranslationService from '../services/TranslationService';

const connectToServer = async (
  host: string,
  callback: any,
  isConnected: boolean,
) => {
  console.log('Fetch test on : ', host);
  if (isConnected) {
    callback(false, host, 'Disconnected');
  } else {
    fetch(host, {method: 'GET'})
      .then(response => response.text())
      .then(data => {
        callback(true, host, data);
      })
      .catch(ex => {
        console.log('Error: ', ex);
        callback(true, host, ex);
      });
  }
};

interface Props {
  callback: any;
  connected: boolean;
}

const AppHandShaker: React.FC<Props> = ({callback, connected}) => {
  const [ipaddress, setIpAddress] = useState('http://192.168.8');

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
                connected
                  ? TranslationService.get('title_disconnect')
                  : TranslationService.get('title_connect')
              }
              color={
                connected
                  ? GlobalStyles.colordblue.backgroundColor
                  : GlobalStyles.colorlblue.backgroundColor
              }
              onPress={() =>
                connectToServer(ipaddress, callback, connected)
              }></AppButton>
          }
          placeholder={TranslationService.get('ip_address')}
        />
      </Stack>
    </View>
  );
};

export default AppHandShaker;
