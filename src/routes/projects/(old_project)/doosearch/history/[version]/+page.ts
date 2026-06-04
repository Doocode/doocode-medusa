import { releases } from '../../data/releases';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const release = releases.find((r) => r.versionString === params.version);

	if (!release) {
		throw error(404, 'Release not found');
	}

	return {
		release
	};
};
