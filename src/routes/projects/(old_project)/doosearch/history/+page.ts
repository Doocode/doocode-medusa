import { releases } from '../data/releases';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	// Sort releases by version number in descending order (newest first)
	const sortedReleases = [...releases].sort((a, b) => b.versionNumber - a.versionNumber);

	return {
		releases: sortedReleases
	};
};
