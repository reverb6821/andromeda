import { ModalProperties, ModalAction, ModalActionTypes } from '@/components/Modal/Modal.properties';

export function showModal(payload: ModalProperties): ModalAction {
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