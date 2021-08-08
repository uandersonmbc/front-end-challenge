export function formatDates(date: Date, format: string): string {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString(format);
}

export function convertMinToHrMn(secs: number): string {
  const hours = Math.floor(secs / 60);
  const mins = Math.floor(secs % 60);
  return `${hours}h ${mins}m`;
}
