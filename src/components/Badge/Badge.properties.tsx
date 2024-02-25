export default interface BadgeProperties {
    // Add properties here
    badgeStyle: string|'primary'|'primary--alert'|'primary--success'|'primary--warn'|'primary--info'|'secondary'|'secondary'|'secondary--alert'|'secondary--success'|'secondary--warn'|'secondary--info',
    label?: string,
    icon?: string,
}
