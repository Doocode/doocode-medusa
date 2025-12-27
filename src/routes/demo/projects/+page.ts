import { doosearch as project } from '../../projects/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    const { bgAccent, ...project_withoutAccent } = project;
    return {
        project_withAccent: project,
        project_withoutAccent
    };
};