export default interface SidebarItemProperties {
    // Add properties here
    item: SideNavItem
}

type SideNavItem = {
    title: string;
    path: string;
    icon?: string;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};