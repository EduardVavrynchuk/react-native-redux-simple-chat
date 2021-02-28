import {ChatActionTypes} from '../../../constants/actionTypes';

const initialState = {
    message: '', 
    history: [{
        id: -1,
        isMy: false,
        text: 'Hello'
    }],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ChatActionTypes.CHAT_SET_MESSAGE: {
            return {
                ...state,
                message: action.payload,
            }
        }
        case ChatActionTypes.CHAT_SET_HISTORY: {
            return {
                history: [...state.history, action.payload],
                message: '',
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;