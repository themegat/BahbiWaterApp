/* eslint-disable prettier/prettier */
const onLog = (message: string) => {
    return {
        type: 'LOG',
        payload: message
    }
};

export { onLog };