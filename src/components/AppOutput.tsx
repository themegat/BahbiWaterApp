/* eslint-disable prettier/prettier */
import {Box, TextArea} from 'native-base';
import GlobalStyles from '../services/GlobalStyle';
import TranslationService from '../services/TranslationService';

interface Props {
  text: string;
}

const AppOutput: React.FC<Props> = ({text}) => {
  return (
    <Box alignItems="center" w="100%">
      <TextArea
        style={[GlobalStyles.theme, GlobalStyles.border]}
        value={text}
        isReadOnly={true}
        autoCompleteType={false}
        h={200}
        placeholder={TranslationService.get('placeholder_output')}
        w="100%"
      />
    </Box>
  );
};

export default AppOutput;
