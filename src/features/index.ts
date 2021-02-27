import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import sampleReducer from './sample';

const rootReducer = combineReducers({});
// const rootReducer = combineReducers({sample: sampleReducer});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
