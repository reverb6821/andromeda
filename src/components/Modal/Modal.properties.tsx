export interface ModalProperties {
    // Add properties here
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
    payload?: ModalProperties;
  }
  
  export type ModalState = {
    modal: ModalProperties | null | undefined;
  };