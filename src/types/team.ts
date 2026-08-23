export interface TeamMember {
  name: string;
  slug: string;
  role: string;
  shortBio: string;
  bio?: string;
  image?: string;
  capabilities: string[];
  socialLinks?: {
    label: string;
    href: string;
  }[];
  featured?: boolean;
}
