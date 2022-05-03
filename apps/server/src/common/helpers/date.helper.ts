import { injectable } from "tsyringe";
import { IFutureDateParms } from "../interfaces/date.interface";

@injectable()
class DateHelper {
  public compareDates(date1: Date, date2: Date): number {
    // With Date object we can compare dates them using the >, <, <= or >=.
    // The ==, !=, ===, and !== operators require to use date.getTime(),
    // so we need to create a new instance of Date with 'new Date()'
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Check if the dates are equal
    const same = d1.getTime() === d2.getTime();
    if (same) return 0;

    // Check if the first is greater than second
    if (d1 > d2) return 1;

    // Check if the first is less than second
    if (d1 < d2) return -1;
  }
  public getCurrentDate(): Date {
    return new Date();
  }

  public getFutureDate({ day, month, year }: IFutureDateParms): Date {
    return new Date(
      new Date().getFullYear() + (year || 0),
      new Date().getMonth() + (month || 0),
      new Date().getDate() + (day || 0),
    );
  }
}

export default DateHelper;
