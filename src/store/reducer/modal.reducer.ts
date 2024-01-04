import { ModalAction, ModalActionTypes } from '../actions/modal.actions';

interface ModalProps {
  size: string,
  title: string,
  children?: JSX.Element, 
  isLoading?: boolean,
  primaryBtnLabel: string,
  modalBtnStyle: string,
  onBtnClickPrimary: (event: React.MouseEvent) => void,
  btnSecondaryLabel: string,
}

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