export interface HeaderProps {
  activeTab: number;
}

export interface MenuItem {
  name: string;
  href?: string;
  submenu?: SubMenuItem[];
}

export interface SubMenuItem {
  name: string;
  href: string;
  navActiveTab?: number;
}
