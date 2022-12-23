/* eslint-disable default-param-last */
import { LOGIN_FLAG } from '../constant/type';

const flag = { flag: false };
export const loginFlagReducer = (state = flag, action) => {
    switch (action.type) {
        case LOGIN_FLAG:
            // eslint-disable-next-line no-case-declarations
            const s = !state.flag;
            return { flag: s };
        default:
            return state;
    }
};
