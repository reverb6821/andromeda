import { ModalProps, ModalAction, ModalActionTypes } from '../Modal.properties';

export function showModal(payload: ModalProps): ModalAction {
  return {
    type: ModalActionTypes.ShowModal,
    payload,
  };
}

export function hideModal(): ModalAction {
  return {
    type: ModalActionTypes.HideModal,
  };
}