import { ProjectStatus } from '../enums';
import type LightDarkTailwindColor from './LightDarkTailwindColor';

export default interface Project {
	id: string;
	codename: string;
	name: string;
	logo: string;
	catchyPhrase: string;

	createdOn: Date;
	updatedOn?: Date;

	versionName?: string;
	versionCode?: number;
	status?: ProjectStatus;

	licenseName?: string;
	licenseUrl?: string;

	bgAccent?: LightDarkTailwindColor;
}
