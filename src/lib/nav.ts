/** Resolve um href de navegação para funcionar a partir de qualquer rota. */
export function resolveNavHref(href: string, pathname: string): string {
  if (!href.startsWith("#")) return href;
  return pathname === "/" ? href : `/${href}`;
}
