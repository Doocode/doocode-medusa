import { doosearch as project } from '../../projects/(old_project)/doosearch/data';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    const { bgAccent, ...project_withoutAccent } = project;
    return {
        project_withAccent: project,
        project_withoutAccent
    };
};