/* eslint-disable prettier/prettier */
import NetworkState from "../../../models/state/network-state";

const onConnected = (state: NetworkState) => {
    return {
        type: "CONNECTED",
        payload: state
    }
}

const onDisconnected = () => {
    return {
        type: "DISCONNECTED"
    }
}

export {
    onConnected,
    onDisconnected
}