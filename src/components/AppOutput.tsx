import { Box, TextArea } from "native-base";
import GlobalStyles from "../services/GlobalStyle";

interface Props {
    text: string;
}

const AppOutput: React.FC<Props> = ({ text }) => {
    return <Box alignItems="center" w="100%">
        <TextArea
            color={GlobalStyles.theme.color}
            value={text}
            isReadOnly={true}
            autoCompleteType={false} h={200}
            placeholder="Logs will be displayed here"
            w="100%"
            fontSize={16} />
    </Box>;
}

export default AppOutput;