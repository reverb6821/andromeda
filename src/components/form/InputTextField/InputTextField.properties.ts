export interface InputTextFieldProps {
    label: string,
    placeholder?: string,
    disabled?: boolean,
    type?: string,
    icon?: string,
    helper?: string,
    model: string,
    value?: string,
    onChange?: (event: React.MouseEvent) => void,
  }