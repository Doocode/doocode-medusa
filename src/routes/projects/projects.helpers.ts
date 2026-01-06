import type { Release } from './projects.types';

/**
 * Returns the release with the highest versionNumber
 * @param list - List of releases
 * @returns The latest release or undefined if the list is empty
 */
export function getLatestRelease(list: Release[]): Release | undefined {
    if (list.length === 0) return undefined;
    
    return list.reduce((latest, current) => 
        current.versionNumber > latest.versionNumber ? current : latest
    );
}