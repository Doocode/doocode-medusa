import type { GalleryItemContent } from "$lib/gallery";
import { LinkType, ProjectStatus, ReleaseType } from "./core/enums";

export interface TwColor {
    light: string;
    dark: string;
}

export interface Project {
    id: string;
    codename: string;
    name: string;
    logo: string;
    catchyPhrase: string;

    createdOn: Date;
    updatedOn?: Date;

    versionName?: string;
    versionCode?: number;
    status?: ProjectStatus;

    licenseName?: string;
    licenseUrl?: string;

    bgAccent?: TwColor;
}

export interface MainActionProps {
    variant: "download" | "try" | "demo" | "repository" | "visit" | "help" | "contact";
    onClick?: (e: Event) => void;
    href?: string;
    text: string;
    withAccent?: boolean;
}

export interface Release {
    /**
     * Release date
     */
    releaseDate: Date;

    /**
     * Version number (numeric format, e.g., 1.0, 2.5)
     */
    versionNumber: number;

    /**
     * Version as string (e.g., "v1.0.0", "v2.5.1")
     */
    versionString: string;

    /**
     * Release type (Alpha, Beta, or Stable)
     */
    type?: ReleaseType;

    /**
     * General release description
     */
    description?: string;

    /**
     * List of bug fixes
     */
    bugfixes?: string[];

    /**
     * List of breaking changes
     */
    breakingChanges?: string[];

    /**
     * List of new features
     */
    features?: string[];

    /**
     * List of improvements
     */
    improvements?: string[];

    /**
     * List of removed features
     */
    removals?: string[];

    /**
     * List of images
     */
    images?: GalleryItemContent[];

    /**
     * List of links
     */
    links?: ProjectLink[];
}

export interface ProjectLink {
    type: LinkType;
    label?: string;
    url: string;
    createdOn?: Date;
    updatedOn?: Date;
}