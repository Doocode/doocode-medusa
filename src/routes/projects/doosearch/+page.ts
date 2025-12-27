import type { PageLoad } from './$types';
import { doosearch } from '../projects';

export const load: PageLoad = () => {
	return { project: doosearch };
};