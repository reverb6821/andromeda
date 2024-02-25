export default interface AlertProperties {
    // Add properties here
    alertStyle: string|'success'|'alert'|'warn'|'info',
    title: string,
    message: string,
    icon?: string,
}
