export interface PasswordFieldProps {
    label: string,
    placeholder?: string,
    disabled?: boolean,
    model: string,
    helper?: string,
    value?: string,
    onChange?: (event: React.MouseEvent) => void,
}