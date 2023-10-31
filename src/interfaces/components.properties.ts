export interface BadgeProps {
    badgeStyle: string,
    label: string;
}

export interface ButtonProps {
    btnStyle: string,
    label: string,
    isLoading?: boolean,
    icon?: string,
    disabled?: boolean,
    type: "button"|"submit"|"reset"|undefined,
    onBtnClick?: (event: React.MouseEvent) => void,
}

export interface CheckboxFieldProps {
    label: string,
    disabled?: boolean,
    model: string,
    value: boolean,
    tooltipText?: string,
}

export interface GridProps {
    children?: JSX.Element|JSX.Element[],
    classNames?: string,
    direction: string,
}

export interface HeaderProps {
    headerTitle: string,
    headerEl: itemProps[],
}

export interface FooterProps {
    footerTitle: string,
    footerEl: itemProps[],
}

interface itemProps {
    label: string,
    route: string,
}

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

export interface PasswordFieldProps {
    label: string,
    placeholder?: string,
    disabled?: boolean,
    model: string,
    helper?: string,
    value?: string,
    onChange?: (event: React.MouseEvent) => void,
}

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

export interface SelectFieldProps {
    label: string,
    model: string,
    disabled?: boolean,
    helper?: string,
    isMulti?: boolean,
    options: optionsProps[],
    sendValue? : (event: React.MouseEvent) => void,

}
  
interface optionsProps {
    label: string,
    value: string,
}

export interface TooltipProps {
    tooltipText?: string;
}