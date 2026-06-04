import type { Release } from "$routes/projects/core";

import { getLocale } from "$lib/paraglide/runtime";

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

export function getRelativeTime(date: Date): string {
    const now = new Date();
    const diffInMs = date.getTime() - now.getTime();
    const diffInDays = Math.trunc(diffInMs / (1000 * 60 * 60 * 24));
    const diffInMonths = Math.trunc(diffInDays / 30);
    const diffInYears = Math.trunc(diffInDays / 365);

    const rtf = new Intl.RelativeTimeFormat(getLocale(), { numeric: 'auto' });

    if (Math.abs(diffInYears) >= 1) {
        return rtf.format(diffInYears, 'year');
    } else if (Math.abs(diffInMonths) >= 1) {
        return rtf.format(diffInMonths, 'month');
    } else {
        return rtf.format(diffInDays, 'day');
    }
}

export function formatDate(
    date: Date,
    options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
): string {
    return new Intl.DateTimeFormat(getLocale(), options).format(date);
}