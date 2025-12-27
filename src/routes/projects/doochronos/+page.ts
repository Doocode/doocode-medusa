import type { PageLoad } from './$types';
import { doochronos } from '../projects';

export const load: PageLoad = () => {
	return { project: doochronos };
};