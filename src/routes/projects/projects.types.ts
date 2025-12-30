export interface TwColor {
    light: string;
    dark: string;
}

export enum ProjectStatus {
    InDevelopment = 'InDev',
    Completed = 'Completed',
    OnHold = 'OnHold',
    Abandoned = 'Abandoned',
    Archived = 'Archived',
}

export interface Project {
    id: string;
    codename: string;
    name: string;
    logo: string;
    catchyPhrase: string;

    createdAt: Date;
    updatedAt?: Date;

    versionName?: string;
    versionCode?: number;
    status?: ProjectStatus;

    licenseName?: string;
    licenseUrl?: string;

    bgAccent?: TwColor;
    mainAction: MainActionProps;
}

export interface MainActionProps {
    variant: "download" | "try" | "demo" | "repository" | "visit" | "help" | "contact";
    onClick?: () => void;
    href?: string;
    text: string;
    withAccent?: boolean;
}
