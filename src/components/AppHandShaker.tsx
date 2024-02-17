/* eslint-disable prettier/prettier */
import { Input, Stack, View } from 'native-base';
import AppButton from './AppButton';
import { useState } from 'react';

const connectToServer = async (host: string, callback: any) => {
  console.log('Fetch test on : ', host);
  return fetch(host, {
    method: 'GET', headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.text())
    .then((data) => {
      console.log('Test : ', data);
      callback(true);
    })
    .catch((ex) => {
      console.log('Error: ', ex);
      callback(false);
    });
};

interface Props {
  callback: any;
}

const AppHandShaker: React.FC<Props> = ({callback}) => {
  const [ipaddress, setIpAddress] = useState('http://192.168.8');

  return (
    <View>
      <Stack>
        <Input
          value={ipaddress}
          onChangeText={newText => setIpAddress(newText)}
          type="text"
          w="100%"
          py="0"
          InputRightElement={
            <AppButton
              rounded="none"
              title="Connect"
              color="blue"
              onPress={() => connectToServer(ipaddress, callback)}></AppButton>
          }
          placeholder="IP Address"
        />
      </Stack>
    </View>
  );
};

export default AppHandShaker;
