import {
    ChatActionTypes
} from '../../../constants/actionTypes';

export const setMessage = (message) => ({
    type: ChatActionTypes.CHAT_SET_MESSAGE,
    payload: message,
});

export const setHistory = (newMessage) => ({
    type: ChatActionTypes.CHAT_SET_HISTORY,
    payload: newMessage,
});
