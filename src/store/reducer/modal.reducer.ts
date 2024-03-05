import { ModalState, ModalAction, ModalActionTypes } from '@/components/Modal/Modal.properties';

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