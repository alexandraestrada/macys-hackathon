import { AUTH_SUCCESS, AUTH_FAIL } from '../actions/index';

export default (state = [], action) => {

    switch (action.type) {
        case AUTH_SUCCESS:
            return [action.payload, ...state];
    }


    return state;
}