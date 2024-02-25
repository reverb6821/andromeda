import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import themeReducer from './reducer/theme.reducer';


//REDUCER IMPORT

const store = configureStore({
  reducer: {
//reducer setter
    theme: themeReducer,
  },
  devTools: true,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;