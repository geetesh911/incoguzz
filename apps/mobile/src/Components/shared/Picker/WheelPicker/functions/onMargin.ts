export interface IMargin {
  horizontal: boolean | null;
  index: number;
  size: number;
  length?: number;
  offset: number;
  manualMargin: number | undefined;
}
export function marginStart({
  horizontal,
  index,
  size,
  offset,
  manualMargin,
}: IMargin) {
  const manualMarginValue = manualMargin ? manualMargin : size / 2 + offset;
  const horizontalValue = index === 0 ? manualMarginValue : 0;

  return horizontal ? horizontalValue : 0;
}
export function marginEnd({
  horizontal,
  index,
  size,
  offset,
  manualMargin,
  length,
}: IMargin) {
  const manualMarginValue = manualMargin ? manualMargin : size / 2 - offset;
  const horizontalValue = index === length ? manualMarginValue : 0;

  return horizontal ? horizontalValue : 0;
}
