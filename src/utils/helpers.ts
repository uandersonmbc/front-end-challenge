export function formatDates(date: Date, format: string): string {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString(format);
}
