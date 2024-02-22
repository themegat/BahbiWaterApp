/* eslint-disable prettier/prettier */
import NetworkState from "../../../models/state/network-state";

const networkReducer = (state: NetworkState = {
    connected: false,
    ipAddress: '192.168.8'
}, action: any) => {
    switch (action.type) {
        case 'CONNECTED':
            return action.payload;
        case 'DISCONNECTED':
            state.connected = false;
            state.ipAddress = '192.168.8';
            return state;
        default:
            return state;
    }
}

export default networkReducer;