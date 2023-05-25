/**
 * function for a work with classes
 * It works like a classNames library
 * @param mainClassName  main class
 * @param mods object of mods - classes who need for main class
 * @param additional additional classes
 * @example classNames('remove-btn', { hovered: true, selectable: true, red: false }, ['flex'])
 * return "remove-btn hovered selectable flex"
 * @return string of classes
 */
export function classNames(
  mainClassName: string,
  mods?: Record<string, boolean | string>,
  additional?: string[],
): string {
  return [
    mainClassName,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map((className) => className),
  ].join(" ");
}
