import { projects } from '../projects';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
    const codename = url.pathname.split('/').at(2);
    const project = projects.find(p => p.codename === codename);

    if (!project) {
        throw new Error(`Project with codename "${codename}" not found.`);
    }

	return {
		project
	};
};