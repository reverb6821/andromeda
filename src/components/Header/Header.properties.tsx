export interface HeaderProperties {
    // Add properties here
    headerTitle: string,
    headerSubTitle: string,
    headerEl: itemProperties[],
    headerLogo: string
}

export interface itemProperties {
    label: string,
    route: string,
}