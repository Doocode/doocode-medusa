import { type Release } from "$routes/projects/projects.types";
import { ReleaseType } from "$routes/projects/core";
import { links } from "../data/links";
import { m } from "$lib/paraglide/messages";
import {
    v1_3_2 as screens_v1_3_2,
    v1_3_0 as screens_v1_3_0,
    v1_2 as screens_v1_2
} from "../gallery/screen";

export const v1_3_2: Release = {
    releaseDate: new Date('2018-09-20'),
    versionNumber: 26,
    versionString: 'v1.3.2',
    type: ReleaseType.Stable,
    get description() { return m['projects.doosearch.releases.v1_3_2.description']() },
    get features() { return [
        m['projects.doosearch.releases.v1_3_2.features.0'](),
        m['projects.doosearch.releases.v1_3_2.features.1'](),
        m['projects.doosearch.releases.v1_3_2.features.2'](),
    ]},
    get breakingChanges() { return [
        m['projects.doosearch.releases.v1_3_2.improvements.2'](),
        m['projects.doosearch.releases.v1_3_2.improvements.0'](),
        m['projects.doosearch.releases.v1_3_2.improvements.1'](),
    ]},
    get improvements() { return [
        m['projects.doosearch.releases.v1_3_2.improvements.3'](),
        m['projects.doosearch.releases.v1_3_2.improvements.4'](),
        m['projects.doosearch.releases.v1_3_2.improvements.5'](),
    ]},
    get bugfixes() { return [
        m['projects.doosearch.releases.v1_3_2.bugfixes.0'](),
        m['projects.doosearch.releases.v1_3_2.bugfixes.1'](),
        m['projects.doosearch.releases.v1_3_2.bugfixes.2'](),
        m['projects.doosearch.releases.v1_3_2.bugfixes.3'](),
    ]},
    get removals() { return [
        m['projects.doosearch.releases.v1_3_2.removals.0'](),
        m['projects.doosearch.releases.v1_3_2.removals.1'](),
    ]},
    images: [...screens_v1_3_2],
    links
};

export const v1_3_1: Release = {
    releaseDate: new Date('2018-08-20'),
    versionNumber: 25,
    versionString: 'v1.3.1',
    type: ReleaseType.Stable,
    get description() { return m['projects.doosearch.releases.v1_3_1.description']() },
    get features() { return [
        m['projects.doosearch.releases.v1_3_1.features.0'](),
    ]},
    get improvements() { return [
        m['projects.doosearch.releases.v1_3_1.improvements.0'](),
        m['projects.doosearch.releases.v1_3_1.improvements.1'](),
    ]},
    bugfixes: [
    ],
    get removals() { return [
        m['projects.doosearch.releases.v1_3_1.removals.0'](),
    ]},
    //images: [...screens_v1_3_1],
};

export const v1_3_0: Release = {
    releaseDate: new Date('2018-07-20'),
    versionNumber: 24,
    versionString: 'v1.3.0',
    type: ReleaseType.Stable,
    get description() { return m['projects.doosearch.releases.v1_3_0.description']() },
    get breakingChanges() { return [
    ]},
    get features() { return [
        m['projects.doosearch.releases.v1_3_0.features.0'](),
        m['projects.doosearch.releases.v1_3_0.features.1'](),
        m['projects.doosearch.releases.v1_3_0.features.2'](),
        m['projects.doosearch.releases.v1_3_0.features.3'](),
        m['projects.doosearch.releases.v1_3_0.features.4'](),
        m['projects.doosearch.releases.v1_3_0.features.5'](),
        m['projects.doosearch.releases.v1_3_0.features.6'](),
        m['projects.doosearch.releases.v1_3_0.features.7'](),
        m['projects.doosearch.releases.v1_3_0.features.8'](),
        m['projects.doosearch.releases.v1_3_0.features.9'](),
    ]},
    get improvements() { return [
        m['projects.doosearch.releases.v1_3_0.improvements.0'](),
        m['projects.doosearch.releases.v1_3_0.improvements.1'](),
        m['projects.doosearch.releases.v1_3_0.improvements.2'](),
    ]},
    removals: [],
    images: [...screens_v1_3_0],
};

export const v1_2: Release = {
    releaseDate: new Date('2015-12-25'),
    versionNumber: 23,
    versionString: 'v1.2.0',
    type: ReleaseType.Stable,
    get description() { return m['projects.doosearch.releases.v1_2.description']() },
    bugfixes: [],
    get features() { return [
        m['projects.doosearch.releases.v1_2.features.0'](),
        m['projects.doosearch.releases.v1_2.features.1'](),
        m['projects.doosearch.releases.v1_2.features.2'](),
        m['projects.doosearch.releases.v1_2.features.3'](),
    ]},
    improvements: [],
    removals: [],
    images: [...screens_v1_2],
};

export const releases: Release[] = [
    v1_3_2, v1_3_1, v1_3_0, v1_2
];
