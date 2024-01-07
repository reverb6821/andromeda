export type SideNavItem = {
    title: string;
    path: string;
    icon?: string;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};

export interface SidebarProps {
    children?: JSX.Element | JSX.Element[],
    sidebarLogo: string,
    sidebarTitle: string,
    sidebarSubTitle: string,
    items: SideNavItem[]
}

export interface SidebarItemProps {
    item: SideNavItem
}

export interface SidebarFooterProps {
    isOpen?: boolean
}
