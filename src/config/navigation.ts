export interface NavigationItem {
  label: string;
  href: string;
  megaMenu?: "services";
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const navigationItems: NavigationItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    megaMenu: "services",
  },
  {
    label: "Work",
    href: "/work",
  },
];

export const mainNavigation = navigationItems;

export const primaryCta = {
  label: "Book a Call",
  href: "/book-a-call",
};