/* eslint-disable prettier/prettier */
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  View,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import GlobalStyles from '../services/GlobalStyle';

const runPump = async (host: string, speed: string, logCallback: any) => {
  return fetch(`${host}/run/${speed}`, {method: 'POST'})
    .then(response => response.text())
    .then(data => {
      logCallback(data);
    })
    .catch(ex => {
      logCallback(ex);
    });
};

const stopPump = async (host: string, logCallback: any) => {
  return fetch(`${host}/stop`, {method: 'POST'})
    .then(response => response.text())
    .then(data => {
      logCallback(data);
    })
    .catch(ex => {
      logCallback(ex);
    });
};

interface Props {
  ipAddress: string;
  connected: boolean;
  logCallback: any;
}

const AppPrimaryControls: React.FC<Props> = ({
  ipAddress,
  connected,
  logCallback,
}) => {
  const [motorSpeed, setMotorSpeed] = useState('2');

  return (
    <View>
      <Stack>
        <InputGroup
          w={{
            base: '100%',
            md: '285',
          }}>
          <InputLeftAddon
            children={
              <Text
                fontSize={GlobalStyles.theme.fontSize}
                fontWeight={GlobalStyles.theme.fontWeight}>
                Motor Speed:
              </Text>
            }
          />
          <Input
            style={[GlobalStyles.theme, GlobalStyles.border]}
            isDisabled={connected ? false : true}
            value={motorSpeed}
            onChangeText={newText => setMotorSpeed(newText)}
            w={{
              base: '70%',
              md: '100%',
            }}
            placeholder="nativebase"
          />
        </InputGroup>
      </Stack>
      <Stack style={styles.container}>
        <Button.Group
          isAttached
          width="100%"
          mx={{
            base: 'auto',
            md: 2,
          }}
          size="md">
          <Button
            fontWeight={GlobalStyles.theme.fontWeight}
            fontSize={GlobalStyles.theme.fontSize}
            isDisabled={connected ? false : true}
            onPress={() => runPump(ipAddress, motorSpeed, logCallback)}
            width={'50%'}
            bg={GlobalStyles.colorgreen.backgroundColor}>
            Start
          </Button>
          <Button
            isDisabled={connected ? false : true}
            onPress={() => stopPump(ipAddress, logCallback)}
            width={'50%'}
            bg={GlobalStyles.colorred.backgroundColor}>
            Stop
          </Button>
        </Button.Group>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default AppPrimaryControls;
