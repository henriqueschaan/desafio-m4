export type Repository = {
    id: number;
    name: string;
    description: string | null;
    private: boolean;
    html_url: string;
    language: string | null;
};
