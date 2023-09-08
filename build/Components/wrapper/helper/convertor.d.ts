export declare const sinceYears: (back: number, calenderType: "jalali" | "default") => Array<number>;
export declare const daysOfMonth: () => Array<number>;
export declare const convertToJalali: Record<string, IConvertToJalali>;
export declare const MonthMapper: (calenderType: "jalali" | "default") => {
    title: string;
    value: string;
}[];
