/* eslint-disable prettier/prettier */
import AppHandShaker from '../components/AppHandShaker';
import {StyleSheet} from 'react-native';
import {Heading, VStack, View} from 'native-base';
import AppPrimaryControls from '../components/AppPrimaryControls';
import GlobalStyles from '../services/GlobalStyle';
import AppOutput from '../components/AppOutput';
import AppDivider from '../components/AppDivider';
import TranslationService from '../services/TranslationService';
import {useSelector} from 'react-redux';

const MainPage: React.FC<any> = () => {
  const logs: string[] = useSelector((state: any) => state.logger);
  const readLogs = () => {
    return logs.join('\n');
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
      <AppHandShaker></AppHandShaker>
      <AppDivider
        title={TranslationService.get('title_controls')}
        width="77%"></AppDivider>
      <AppPrimaryControls></AppPrimaryControls>
      <AppDivider
        title={TranslationService.get('title_output')}
        width="82%"></AppDivider>
      <AppOutput text={readLogs()}></AppOutput>
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
