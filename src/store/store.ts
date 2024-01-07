import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import themeReducer from './reducer/theme.reducer'
import modalReducer from '../components/modal/reducer/modal.reducer'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
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