export interface ModalProps {
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

export type ModalState = {
  modal: ModalProps | null | undefined;
};
