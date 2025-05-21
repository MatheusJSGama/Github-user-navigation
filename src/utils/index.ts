export function formatedNumber(value: number | undefined) {
  if (typeof value !== 'number') return '0';
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value);
}
