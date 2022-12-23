import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { loginFlagReducer } from './loginFlagReducer';
import { tasklistReducer } from './tasklistReducer';

// 複数のReducerをまとめたいときはこっち
const rootReducer = combineReducers({
    loginFlagReducer,
    tasklistReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;
