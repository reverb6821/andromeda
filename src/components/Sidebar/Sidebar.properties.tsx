export default interface SidebarProperties {
    // Add properties here
    children?: JSX.Element | JSX.Element[],
    sidebarLogo: string,
    sidebarTitle: string,
    sidebarSubTitle: string,
    items: SideNavItem[]
}

export type SideNavItem = {
    title: string;
    path: string;
    icon?: string;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};
