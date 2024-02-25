export default interface TooltipProperties {
    // Add properties here
    content: string|JSX.Element|JSX.Element[],
    direction?: string|'top'|'left'|'right'|'bottom',
    delay?: number
}
