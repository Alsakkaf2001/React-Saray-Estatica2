export function getBasePath(): string {
  // Vite's BASE_URL always ends with '/'
  const base = (import.meta as any).env?.BASE_URL || '/';
  return base;
}

export function buildUrl(relativePath: string): string {
  const base = getBasePath();
  const cleaned = relativePath.replace(/^\//, '');
  return `${base}${cleaned}`;
}

export function stripBaseFromPathname(pathname: string): string {
  const base = getBasePath();
  if (pathname.startsWith(base)) {
    const remainder = pathname.slice(base.length);
    return `/${remainder.replace(/^\//, '')}`;
  }
  return pathname;
}

export function pushPath(relativePath: string): void {
  const url = buildUrl(relativePath);
  window.history.pushState({}, '', url);
}

