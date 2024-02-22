/* eslint-disable prettier/prettier */
const loggerReducer = (state: string[] = [], action: any) => {
    switch (action.type) {
        case 'LOG':
            const data = [...state];
            data.push(action.payload);
            return data;
        default:
            return state;
    }
};

export default loggerReducer;