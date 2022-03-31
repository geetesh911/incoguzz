export class DateHelper {
  static dateDifference(date: string | Date = new Date()) {
    const date1 = new Date(date);
    const date2 = new Date();
    const diff = new Date(date2.getTime() - date1.getTime());

    const years = diff.getUTCFullYear() - 1970;
    const months = diff.getUTCMonth();
    const days = diff.getUTCDate() - 1;

    if (years > 0) return `${years} ${years === 1 ? "year" : "years"}`;
    if (months > 0) return `${months} ${months === 1 ? "month" : "months"}`;
    return `${days} ${days === 1 ? "day" : "days"}`;
  }
}
