export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  description?: string;
}

export interface NavigationState {
  mobileOpen: boolean;
  servicesOpen: boolean;
}