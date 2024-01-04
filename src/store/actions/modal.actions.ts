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

export enum ModalActionTypes {
  ShowModal,
  HideModal,
}

export interface ModalAction {
  type: ModalActionTypes;
  payload?: ModalProps;
}

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