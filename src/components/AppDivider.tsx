/* eslint-disable prettier/prettier */
import {Divider, HStack, Heading} from 'native-base';
import GlobalStyles from '../services/GlobalStyle';
import {StyleSheet} from 'react-native';

interface Props {
  title: string;
  width: string;
}
/* eslint-disable eol-last */
const AppDivider: React.FC<Props> = ({title, width = '50%'}) => {
  return (
    <HStack>
      <Heading style={[GlobalStyles.theme, styles.dividerTitle]}>
        {title}
      </Heading>
      <Divider w={width} my="5" color={GlobalStyles.theme.color} />
    </HStack>
  );
};

const styles = StyleSheet.create({
  dividerTitle: {
    padding: 3,
    fontSize: 20,
  },
});

export default AppDivider;
