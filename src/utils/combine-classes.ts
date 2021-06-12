export const combineClasses = (...args: (string | undefined)[]) => {
  return args.filter(Boolean).join(' ');
};
