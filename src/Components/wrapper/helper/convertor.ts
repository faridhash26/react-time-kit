import moment from "moment";

export const sinceYears = (
  back: number,
  calenderType: "jalali" | "default"
): Array<number> => {
  const year = new Date().getFullYear();

  if (calenderType === "jalali") {
    return Array.from(
      { length: back },
      (v, i) => year - 621 - back + i + 1
    ).reverse();
  } else {
    return Array.from(
      { length: back },
      (v, i) => year - back + i + 1
    ).reverse();
  }
};
export const daysOfMonth = (): Array<number> => {
  const m = moment();
  let count = 0;
  let daysInMonth = m.daysInMonth();
  return Array.from({ length: daysInMonth }, (v, i) => count + i + 1);
};

export const convertToJalali: Record<string, IConvertToJalali> = {
  "1": { name: "فروردین" },
  "2": { name: "اردیبهشت" },
  "3": { name: "خرداد" },
  "4": { name: "تیر" },
  "5": { name: "مرداد" },
  "6": { name: "شهریور" },
  "7": { name: "مهر" },
  "8": { name: "آبان" },
  "9": { name: "آذر" },
  "10": { name: "دی" },
  "11": { name: "بهمن" },
  "12": { name: "اسفند" },
};
export const MonthMapper = (calenderType: "jalali" | "default") => {
  if (calenderType === "jalali") {
    return Object.keys(convertToJalali).map((item) => {
      return { title: convertToJalali[item].name, value: String(item) };
    });
  } else {
    return moment.months().map((item) => {
      return { title: String(item), value: String(item) };
    });
  }
};
