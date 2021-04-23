/**
 * Format UTC timezone offset.
 * NOTE: This function does not support minutes offset currently.
 */
export function formatTzOffset(offset: number): string {
  return (
    (offset >= 0 ? "+" : "-") +
    ("00" + Math.abs(offset).toString(10)).slice(-2) +
    ":00"
  );
}
