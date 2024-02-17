import { Button, Input, InputGroup, InputLeftAddon, Stack, View } from "native-base";
import AppButton from "./AppButton";
import { StyleSheet } from "react-native";
import { useState } from "react";

const runPump = async (host: string, speed: string) => {
    return fetch(`${host}/run/${speed}`, { method: 'POST' }).then(response => response.text())
        .then((data) => {
            console.log('Rs : ', data);
        })
        .catch((ex) => {
            console.log('Error: ', ex);
        });
};

const stopPump = async (host: string) => {
    return fetch(`${host}/stop`, { method: 'POST' }).then(response => response.text())
        .then((data) => {
            console.log('Rs : ', data);
        })
        .catch((ex) => {
            console.log('Error: ', ex);
        });
};

interface Props {
    ipAddress: string;
    connected: boolean
}

const AppPrimaryControls: React.FC<Props> = ({ ipAddress, connected }) => {
    const [motorSpeed, setMotorSpeed] = useState("2");

    return (
        <View>
            <Stack style={styles.container}>
                <InputGroup w={{
                    base: "100%",
                    md: "285"
                }}>
                    <InputLeftAddon children={"Motor Speed: "} />
                    <Input
                        value={motorSpeed}
                        onChangeText={newText => setMotorSpeed(newText)}
                        w={{
                            base: "70%",
                            md: "100%"
                        }} placeholder="nativebase" />
                </InputGroup>
            </Stack>
            <Stack style={styles.container}>
                <Button.Group isAttached width="100%" mx={{
                    base: "auto",
                    md: 2
                }} size="md">
                    <Button
                        isDisabled={connected ? false : true}
                        onPress={() => runPump(ipAddress, motorSpeed)}
                        width={"50%"} colorScheme="green">Start</Button>
                    <Button
                        isDisabled={connected ? false : true}
                        onPress={() => stopPump(ipAddress)}
                        width={"50%"} colorScheme="red">Stop</Button>
                </Button.Group>
            </Stack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
});

export default AppPrimaryControls;