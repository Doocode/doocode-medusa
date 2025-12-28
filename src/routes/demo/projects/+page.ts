import { projects } from '../../projects/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    const randomIndex = Math.floor(Math.random() * projects.length);
    const project = projects[randomIndex];
    const { bgAccent, ...project_withoutAccent } = project;
    return {
        project_withAccent: project,
        project_withoutAccent
    };
};