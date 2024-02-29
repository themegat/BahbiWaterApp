/* eslint-disable prettier/prettier */
import {Button, HStack, Stack, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import GlobalStyles from '../services/GlobalStyle';
import TranslationService from '../services/TranslationService';
import {useDispatch, useSelector} from 'react-redux';
import NetworkState from '../models/state/network-state';
import {onLog} from '../services/state/actions/logger';

const speedButtons: {value: number}[] = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
];

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
      <HStack style={styles.speedInput}>
        <Text bold opacity={networkState.connected ? 1 : 0.5}>
          {TranslationService.get('motor_speed')}
        </Text>
        <Button.Group
          isAttached
          colorScheme="blue"
          mx={{
            base: 'auto',
            md: 0,
          }}
          size="sm">
          {speedButtons.map(item => (
            <Button
              isDisabled={!networkState.connected}
              onPress={() => {
                setMotorSpeed(item.value.toString());
              }}
              size={'md'}
              width={85}
              colorScheme="blue.600"
              bg={motorSpeed === item.value.toString() ? '#106a91' : '#1bb1f2'}>
              <Text color="white" bold>{item.value}</Text>
            </Button>
          ))}
        </Button.Group>
      </HStack>
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
  speedInput: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 8,
    display: 'flex',
    alignItems: 'baseline',
  },
});

export default AppPrimaryControls;
