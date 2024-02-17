/* eslint-disable prettier/prettier */
import AppHandShaker from '../components/AppHandShaker';
import {StyleSheet} from 'react-native';
import {Heading, VStack, View} from 'native-base';
import { useState } from 'react';

const MainPage: React.FC<any> = () => {
  const [connected, setConnected] = useState(false);
  const onConnected = (connected: boolean) => {
    setConnected(connected);
  }

  return (
    <View style={styles.container}>
      <VStack alignItems="center" space={5}>
        <Heading size="2xl">Bahbi Water</Heading>
      </VStack>
      <AppHandShaker callback={onConnected}></AppHandShaker>
      <Heading>
        {connected ? 'connected' : 'not-connected'}
      </Heading>
      {/* <Section title="Step One">
          Edit <Text style={styles.highlight}>App.tsx</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MainPage;
