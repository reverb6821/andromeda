export default interface FlexContainerProperties {
    // Add properties here
    children?: JSX.Element|JSX.Element[],
    className?: string,
    direction: string |'row'|'row-reverse'|'column'|'column-reverse',
}
