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
import TranslationService from '../services/TranslationService';
import {useDispatch, useSelector} from 'react-redux';
import NetworkState from '../models/state/network-state';
import {onLog} from '../services/state/actions/logger';

const AppPrimaryControls: React.FC<any> = () => {
  const [motorSpeed, setMotorSpeed] = useState('2');
  const networkState: NetworkState = useSelector((state: any) => state.network);
  const dispatch = useDispatch();

  const runPump = async (host: string, speed: string) => {
    return fetch(`${host}/run/${speed}`, {method: 'POST'})
      .then(response => response.text())
      .then(data => {
        dispatch(onLog(data.toString()));
      })
      .catch(ex => {
        dispatch(onLog(ex.toString()));
      });
  };

  const stopPump = async (host: string) => {
    return fetch(`${host}/stop`, {method: 'POST'})
      .then(response => response.text())
      .then(data => {
        dispatch(onLog(data.toString()));
      })
      .catch(ex => {
        dispatch(onLog(ex.toString()));
      });
  };

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
                {TranslationService.get('motor_speed')}:
              </Text>
            }
          />
          <Input
            style={[GlobalStyles.theme, GlobalStyles.border]}
            isDisabled={networkState.connected ? false : true}
            value={motorSpeed}
            onChangeText={newText => setMotorSpeed(newText)}
            w={{
              base: '73%',
              md: '100%',
            }}
            placeholder={TranslationService.get('placeholder_motorspeed')}
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
            isDisabled={networkState.connected ? false : true}
            onPress={() => runPump(networkState.ipAddress, motorSpeed)}
            width={'50%'}
            bg={GlobalStyles.coloryellow.backgroundColor}>
            {TranslationService.get('start')}
          </Button>
          <Button
            isDisabled={networkState.connected ? false : true}
            onPress={() => stopPump(networkState.ipAddress)}
            width={'50%'}
            bg={GlobalStyles.colorred.backgroundColor}>
            {TranslationService.get('stop')}
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
