export interface Project {
    title: string;
    slug: string;
    client?: string;
    year?: number;
    services: string[];
    featured?: boolean;
}