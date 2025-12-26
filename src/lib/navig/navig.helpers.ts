
// true when the current path is /projects/<codename> (one segment after /projects)
export function isProjectDetailPath(path: string): boolean {
    return /^\/projects\/[^\/]+\/?$/.test(path);
}