import {combineReducers} from 'redux';

import ChatReducer from './chat/ChatReducer';

const rootReducer = combineReducers({
    chat: ChatReducer,
});

export default rootReducer;