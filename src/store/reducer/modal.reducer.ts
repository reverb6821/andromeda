import { ModalProps } from '@/interfaces/components.properties';

import { ModalAction, ModalActionTypes } from '../actions/modal.actions';

type ModalState = {
    modal: ModalProps | null | undefined;
  };
  
  const initialState: ModalState = {
    modal: null,
  };

  function modalReducer(state = initialState, action: ModalAction): ModalState {
    switch (action.type) {
      case ModalActionTypes.ShowModal:
        return {
          ...state,
          modal: action.payload,
        };
      case ModalActionTypes.HideModal:
        return {
          ...state,
          modal: null,
        };
      default:
        return state;
    }
  }
  
//   const rootReducer = combineReducers({ modal: modalReducer });
//   export type RootState = ReturnType<typeof rootReducer>;
//   export default rootReducer;

export default modalReducer