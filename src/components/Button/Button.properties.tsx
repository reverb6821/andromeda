export default interface ButtonProperties {
    // Add properties here
    btnStyle: string,
    label: string,
    isLoading?: boolean,
    icon?: string,
    disabled?: boolean,
    type: "button"|"submit"|"reset"|undefined,
    onBtnClick?: () => void,
}
